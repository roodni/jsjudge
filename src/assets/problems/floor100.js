import md from './floor100.md';

export default {
  markdown: md,
  args_default: 'n',
  testcases: [
    {
      name: 'all',
      judge: (f, ac, wa) => {
        if (f(0) !== 0) wa();
        if (f(99) !== 0) wa();
        if (f(100) !== 100) wa();
        if (f(110) !== 100) wa();
        if (f(199) !== 100) wa();
        if (f(256) !== 200) wa();
        if (f(12345) !== 12300) wa();
        ac();
      }
    }
  ]
};