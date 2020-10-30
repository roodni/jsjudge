import md from './string2num.md';

// 名前空間汚染の対策をしていないが、面倒なので放置

export default {
  markdown: md,
  args_default: 'str',
  testcases: [
    {
      name: '-100〜100',
      judge: (f, ac, wa) => {
        for (let i = -100; i <= 100; i++) {
          const s = i.toString();
          if (f(s) !== i) {
            wa();
            return;
          }
        }
        ac();
      }
    },
    {
      name: 'その他',
      judge: (f, ac, wa) => {
        const ff = s => {
          const n = parseInt(s, 10);
          return isNaN(n) ? 0 : n;
        };
        const l = ['12345', '.1', '0xff', '1.2', 'Infinity'];
        for (const s of l) {
          if (f(s) !== ff(s)) {
            wa();
            return;
          }
        }
        ac();
      }
    }
  ]
};