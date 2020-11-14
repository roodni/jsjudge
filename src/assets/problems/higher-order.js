import md from './higher-order.md';

export default {
  markdown: md,
  args_default: 'f, n',
  testcases: [
    {
      name: '全て',
      judge: (f, ac, wa) => {
        const test = (n) => {
          let s = 0;
          const fn = () => { s++; };
          f(fn, n);
          return s === n;
        };
        for (const n of [1, 23, 1000]) {
          if (!test(n)) {
            wa();
            return;
          }
        }
        ac();
      }
    }
  ]
};