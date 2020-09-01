<template>
  <div>
    <v-card>
      <v-card-title>問題</v-card-title>
      <v-card-text>
        <component :is="text"></component>
      </v-card-text>
    </v-card>
    <v-card>
      <v-card-title>提出</v-card-title>
      <v-card-text>
        <v-form>
          <code>
            function (
            <v-text-field v-model="args" filled flat dense hide-details></v-text-field>
            ) {
            <v-textarea v-model="code" filled flat dense hide-details></v-textarea>
            }
          </code>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn @click="judge_code">判定</v-btn>
      </v-card-actions>
    </v-card>
    <v-card>
      <v-card-title>結果</v-card-title>
      <v-simple-table>
        <thead>
          <tr>
            <th style="width:30%">ケース名</th>
            <th style="width:10rem">状態</th>
            <th>エラー</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in testcases" :key="item.name">
            <td>{{ item.name }}</td>
            <td>
              <span v-if="item.state === ''" style="color:gray">無</span>
              <span v-if="item.state === 'R'" style="color:gray">実行中</span>
              <span v-if="item.state === 'SE'" style="color:red">文法エラー</span>
              <span v-if="item.state === 'RE'" style="color:red">実行時エラー</span>
              <span v-if="item.state === 'WA'" style="color:red">誤答</span>
              <span v-if="item.state === 'AC'" style="color:green">正答</span>
              <span v-if="item.state === 'TLE'" style="color:red">時間切れ</span>
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