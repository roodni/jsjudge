import md from './test2.md';

export default {
  markdown: md,
  testcases: [
    {
      name: '真値?',
      judge: (f, ac, wa) => {
        if (f()) { ac(); } else { wa(); }
      }
    }
  ]
};