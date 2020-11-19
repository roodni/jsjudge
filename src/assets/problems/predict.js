import md from './predict.md';

export default {
  markdown: md,
  testcases: [
    {
      name: '未来予知',
      judge: (submitted_func, accept, reject) => {
        const predicted = submitted_func();
        const actual = Math.random();
        if (predicted === actual) {
          accept();
        } else {
          reject();
        }
      }
    }
  ]
};