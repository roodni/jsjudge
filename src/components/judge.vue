<template>
  <div>
    <v-card>
      <v-card-text>
        <v-form>
          function (
          <v-text-field v-model="args" filled flat dense hide-details />
          ) {
          <v-textarea v-model="code" filled flat dense hide-details></v-textarea>
          }
          <v-card-actions>
            <v-btn @click="judge_code">判定</v-btn>
          </v-card-actions>
        </v-form>
      </v-card-text>
      <v-simple-table>
        <thead>
          <tr>
            <th style="width:30%">ケース名</th>
            <th style="width:10rem">状態</th>
            <th>エラー</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in cases" :key="index">
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
import JudgeWorker from 'worker-loader!./judge.worker.js';

export default {
  name: 'Judge',
  data() {
    return {
      args: '',
      code: "return () => 110;",
      cases: [
        {
          name: '1回',
          state: '',
          err: '',
          judge(f, ac, wa) {
            const g = f();
            if (!(g instanceof Function)) {
              wa();
              return;
            }
            let a = 0, b = 1;
            for (let i = 0; i < 100; i++) {
              if (a + b !== g()) {
                wa();
                return;
              }
              [a, b] = [b, a + b];
            }
            ac();
          }
        },
        {
          name: '2回同時',
          state: '',
          err: '',
          judge(f, ac, wa) {
            const g = [f(), f()];
            if (!(g[0] instanceof Function && g[1] instanceof Function)) {
              wa();
              return;
            }
            const a = [0, 0];
            const b = [1, 1];
            for (let i = 0; i < 100; i++) {
              for (let j = 0; j < 2; j++) {
                if (a[j] + b[j] !== g[j]()) {
                  wa();
                  return;
                }
                [a[j], b[j]] = [b[j], a[j] + b[j]];
              }
            }
            ac();
          }
        },
        {
          name: '100回反復',
          state: '',
          err: '',
          judge(f, ac, wa) {
            for (let j = 0; j < 100; j++) {
              const g = f();
              if (!(g instanceof Function)) {
                wa();
                return;
              }
              let a = 0, b = 1;
              for (let i = 0; i < 100; i++) {
                if (a + b !== g()) {
                  wa();
                  return;
                }
                [a, b] = [b, a + b];
              }
              ac();
            }
          }
        },
        {
          name: '1秒後にACになるケース',
          state: '',
          err: '',
          judge(f, ac) {
            f();
            setTimeout(() => {ac()}, 1000);
          }
        }
      ]
    };
  },
  methods: {
    judge_code() {
      for (const testcase of this.cases) {
        testcase.state = 'R';
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
          if (typeof data !== 'object' || data === null) {
            return;
          }
          if (data['key'] !== key) {
            console.warn('不正を試みないでください');
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
      }
    }
  }
};
</script>

<style scoped>
</style>
