<template>
  <div>
    <v-card>
      <v-card-title>
        <span class="mr-4">{{ name }}</span>
        <v-chip outlined label small class="mr-2">
          <v-avatar left>
            <v-icon>mdi-clock-alert</v-icon>
          </v-avatar>
          実行時間制限: 2秒
        </v-chip>
        <v-chip outlined label small>
          <v-avatar left>
            <progress-icon :progress="progress"></progress-icon>
          </v-avatar>
          {{ progress_text }}
        </v-chip>
      </v-card-title>
      <v-card-text>
        <component :is="text"></component>
      </v-card-text>
    </v-card>

    <v-card class="mt-8">
      <v-card-title>提出</v-card-title>
      <v-card-text>
        <code style="font-size:16px;">
          function (
          <v-text-field
            v-model="args"
            outlined dense hide-details
          ></v-text-field>
          ) {
          <v-textarea
            v-model="code"
            outlined dense hide-details
          ></v-textarea>
          }
        </code>
      </v-card-text>
      <v-card-actions>
        <v-btn
          outlined
          color="primary"
          class="ml-2"
          @click="judgeCode"
          :disabled="is_running"
        >判定</v-btn>
        <v-btn
          outlined
          @click="resetArgsAndCode"
        >リセット</v-btn>
      </v-card-actions>
    </v-card>

    <v-card class="mt-8">
      <v-card-title>結果</v-card-title>
      <v-simple-table>
        <thead>
          <tr>
            <th style="width:30%">ケース名</th>
            <th style="width:8rem">状態</th>
            <th style="width:auto">エラー</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in testcases" :key="item.name">
            <td>{{ item.name }}</td>
            <td class="font-weight-bold">
              <span v-if="item.state === ''" class="grey--text">無</span>
              <span v-if="item.state === 'R'" class="grey--text">実行中</span>
              <span v-if="item.state === 'SE'" class="red--text">文法エラー</span>
              <span v-if="item.state === 'RE'" class="red--text">実行時エラー</span>
              <span v-if="item.state === 'WA'" class="red--text">誤答</span>
              <span v-if="item.state === 'AC'" class="green--text">正答</span>
              <span v-if="item.state === 'TLE'" class="red--text">時間切れ</span>
            </td>
            <td>{{ item.err }}</td>
          </tr>
        </tbody>
      </v-simple-table>
    </v-card>
  </div>
</template>

<script>
import JudgeWorker from 'worker-loader!./problem-judge-worker.js';
import 'highlight.js/styles/atom-one-light.css';
import problems_index from '../assets/problems-index.json';
import setTitle from '../utils/set-title';
import store_progress from '../stores/problem-progress';
import ProgressIcon from './progress-icon';

export default {
  name: 'problem-judge',
  components: {
    ProgressIcon
  },
  props: {
    src: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      text: null,
      name: '',
      args_default: '',
      args: '',
      code_default: '',
      code: '',
      testcases: [],
      progress_state: store_progress.state
    };
  },
  computed: {
    is_running() {
      return this.testcases.some(c => c.state === 'R');
    },
    progress() {
      return store_progress.getProgress(this.src);
    },
    progress_text() {
      switch (this.progress) {
      case store_progress.values.SOLVED:
        return '全ケース正解済み';
      case store_progress.values.PARTIALLY:
        return '一部ケース正解済み';
      case store_progress.values.N_A:
        return '正解していない';
      default:
        return 'エラー';
      }
    }
  },
  watch: {
    src: {
      immediate: true,
      handler(src_new) {
        import(`../assets/problems/${src_new}.js`)
          .then(module => {
            const problem = module.default;
            this.name = problems_index.find(p => p.src === src_new).name ?? src_new;
            setTitle(this.name);
            this.text = problem.markdown.vue.component;
            this.args_default = problem['args_default'] ?? '';
            this.args = this.args_default;
            this.code_default = problem['code_default'] ?? '';
            this.code = this.code_default;
            this.testcases = [];
            for (const testcase of problem.testcases) {
              this.testcases.push({
                name: testcase.name,
                judge: testcase.judge,
                state: '',
                err: ''
              });
            }
          })
          .catch(() => {
            this.$router.replace('/404');
          });
      }
    }
  },
  methods: {
    resetArgsAndCode() {
      this.args = this.args_default;
      this.code = this.code_default;
    },
    resetProgress() {
      store_progress.setProgress(this.src, store_progress.values.N_A);
    },
    judgeCode() {
      let running_num = 0;
      let succeeded_num = 0;
      let failed_num = 0;
      for (const testcase of this.testcases) {
        running_num++;
        testcase.state = 'R';
        testcase.err = '';
        const set_result = (state, err) => {
          if (testcase.state !== 'R') {
            return;
          }
          testcase.state = state;
          testcase.err = (err === undefined) ? '' : err;
          running_num--;
          switch (state) {
          case 'AC':
            succeeded_num++;
            break;
          case 'SE':
          case 'RE':
          case 'WA':
          case 'TLE':
            failed_num++;
            break;
          default:
            console.warn('invalid result', state);
          }
          if (running_num === 0) {
            // 全ケース終了時の判定
            if (succeeded_num > 0) {
              if (failed_num === 0) {
                // 全正解
                store_progress.setProgress(
                  this.src,
                  store_progress.values.SOLVED
                );
              } else {
                // 一部正解
                const progress = store_progress.getProgress(this.src);
                if (progress !== store_progress.values.SOLVED) {
                  store_progress.setProgress(
                    this.src,
                    store_progress.values.PARTIALLY
                  );
                }
              }
            }
          }
        };
        /**
         * @type Worker
         */
        const worker = new JudgeWorker();
        const key = Math.random();
        const timer = setTimeout(() => {
          worker.terminate();
          set_result('TLE');
        }, 2000);
        worker.addEventListener('message', e => {
          const data = e.data;
          if (!(data instanceof Object) || data['key'] !== key) {
            return;
          }
          worker.terminate();
          clearTimeout(timer);
          set_result(data['res'], data['err']);
        });
        worker.addEventListener('error', e => {
          e.preventDefault();
          worker.terminate();
          clearTimeout(timer);
          set_result('RE', e.message);
        });
        worker.postMessage({
          key: key,
          args: this.args,
          code: this.code,
          judge_code: testcase.judge.toString()
        });
        // console.log(testcase.judge.toString());
      }
    }
  }
};
</script>

<style scoped>
.v-chip:before {
  background-color: transparent;
}
code {
  color: inherit;
  background-color: transparent;
  font-size: 100%;
  font-weight: bold;
  padding: 0;
}
</style>