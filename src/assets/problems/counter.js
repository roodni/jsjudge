import md from './counter.md';

export default {
  markdown: md,
  testcases: [
    {
      name: 'サンプル',
      judge: (f, ac, wa) => {
        const Counter = f();
        const counter = new Counter(0, 100);
        if (counter.value !== 0) {
          wa();
          return;
        }
        counter.count();
        if (counter.value !== 100) {
          wa();
          return;
        }
        counter.count();
        if (counter.value !== 200) {
          wa();
          return;
        }
        ac();
      }
    },
    {
      name: '複数個同時',
      judge: (f, ac, wa) => {
        const Counter = f();
        const a = new Counter(0, 1);
        const b = new Counter(1000, 10);
        const turn = [a, a, a, b, a, b, b];
        const ans = [1, 2, 3, 1010, 4, 1020, 1030];
        for (let i = 0; i < turn.length; i++) {
          const c = turn[i];
          c.count();
          if (c.value !== ans[i]) {
            wa();
            return;
          }
        }
        ac();
      }
    }
  ]
};