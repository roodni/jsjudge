import md from './day-of-the-week.md';

export default {
  markdown: md,
  args_default: "y, m, d",
  testcases: [
    {
      name: '2020年11月',
      judge: (f, ac, wa) => {
        for (let d = 1; d <= 30; d++) {
          const date = new Date(2020, 10, d);
          const ans = "日月火水木金土"[date.getDay()];
          const res = f(2020, 11, d);
          if (ans !== res) {
            wa();
            return;
          }
        }
        ac();
      }
    },
    {
      name: '1600年〜2100年',
      judge: (f, ac, wa) => {
        let d = 1;
        for (let y = 1600; y <= 2100; y++) {
          for (let m = 1; m <= 12; m++) {
            const date = new Date(y, m - 1, d);
            const ans = "日月火水木金土"[date.getDay()];
            const res = f(y, m, d);
            if (ans !== res) {
              wa();
              return;
            }
            d = d % 10 + 1;
          }
        }
        ac();
      }
    }
  ]
};