import md from './gp.md';

export default {
  markdown: md,
  args_default: 'score',
  testcases: [
    {
      name: 'all',
      judge: (f, ac, wa) => {
        const gp = score => (score <= 59) ? 0 : (score - 55) / 10;
        for (let i = 0; i <= 100; i++) {
          if (f(i) !== gp(i)) {
            wa();
            return;
          }
        }
        ac();
      }
    }
  ]
};