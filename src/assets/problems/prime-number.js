import md from './prime-number.md';

export default {
  markdown: md,
  args_default: 'n',
  testcases: [
    {
      name: 'all',
      judge: (f, ac, wa) => {
        const ff = n => {
          for (let i = 2; i * i <= n; i++) {
            if (n % i === 0) { return false; }
          }
          return true;
        };
        for (let i = 0; i < 200; i++) {
          if (!!f(i) !== !!ff(i)) {
            wa();
            return;
          }
        }
        ac();
      }
    }
  ]
};