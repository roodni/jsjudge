import md from './wait.md';

export default {
  markdown: md,
  args_default: 'callback',
  testcases: [
    {
      name: '判定',
      judge: (f, ac, wa) => {
        const now = Date.now;
        const start = now();
        f(() => {
          const time = now() - start;
          if (time < 1000) {
            wa('1秒以上待機して下さい');
          } else {
            ac();
          }
        });
      }
    }
  ]
};