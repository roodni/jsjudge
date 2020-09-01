import md from './add.md';

export default {
  markdown: md,
  args_default: 'a, b',
  testcases: [
    {
      name: '1 + 1',
      judge: (f, ac, wa) => {
        if (f(1, 1) === 2) {
          ac();
        } else {
          wa();
        }
      }
    },
    {
      name: '100マス計算',
      judge: (f, ac, wa) => {
        for (let i = 1; i <= 100; i++) {
          for (let j = 1; j <= 100; j++) {
            if (f(i, j) !== i + j) {
              wa();
              return;
            }
          }
        }
        ac();
      }
    }
  ]
};