<template>
  <div>
    <v-card>
      <v-card-title>{{ name }}</v-card-title>
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
          @click="judge_code"
        >判定</v-btn>
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
import problemsIndex from '../assets/problems-index.json';
import setTitle from '../utils/set-title';

export default {
  name: 'problem-judge',
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
      args: '',
      code: '',
      testcases: []
    };
  },
  watch: {
    src: {
      immediate: true,
      handler(src_new) {
        import(`../assets/problems/${src_new}.js`)
          .then(module => {
            const problem = module.default;
            this.name = src_new;
            for (const problem of problemsIndex) {
              if (problem.src === src_new) {
                this.name = problem.name;
                break;
              }
            }
            setTitle(this.name);
            this.text = problem.markdown.vue.component;
            this.args = problem['args_default'] ?? '';
            this.code = problem['code_default'] ?? '';
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
    judge_code() {
      for (const testcase of this.testcases) {
        testcase.state = 'R';
        testcase.err = '';
        const set_state = (state, err) => {
          if (testcase.state !== 'R') {
            return;
          }
          testcase.state = state;
          testcase.err = (err === undefined) ? '' : err;
        };
        /**
         * @type Worker
         */
        const worker = new JudgeWorker();
        const key = Math.random();
        const timer = setTimeout(() => {
          set_state('TLE');
          worker.terminate();
          console.log('TLE');
        }, 2000);
        worker.addEventListener('message', e => {
          const data = e.data;
          if (!(data instanceof Object) || data['key'] !== key) {
            return;
          }
          worker.terminate();
          clearTimeout(timer);
          set_state(data['res'], data['err']);
        });
        worker.addEventListener('error', e => {
          e.preventDefault();
          worker.terminate();
          clearTimeout(timer);
          set_state('RE', e.message);
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