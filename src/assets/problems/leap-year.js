import md from './leap-year.md';

export default {
  markdown: md,
  args_default: 'year',
  testcases: [
    {
      name: 'all',
      judge: (f, ac, wa) => {
        const ff = y => (y % 400 === 0) || (y % 100 !== 0 && y % 4 === 0);
        for (let i = 1600; i < 4000; i++) {
          if (f(i) !== ff(i)) {
            wa();
            return;
          }
        }
        ac();
      }
    }
  ]
};