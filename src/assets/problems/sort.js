import md from "./sort.md";

export default {
  markdown: md,
  args_default: 'subjects',
  testcases: [
    {
      name: '途中',
      judge: (f, ac, wa) => {
        wa();
      }
    }
  ]
};