import md from './filter.md';

export default {
  markdown: md,
  args_default: 'subjects, max',
  testcases: [
    {
      name: 'サンプル',
      judge: (f, ac, wa, { is_same_array }) => {
        const subjects = [
          { name: "英語第一", score: 79 },
          { name: "英語第二", score: 65 },
          { name: "英語第三", score: 90 },
          { name: "英語第四", score: 60 },
          { name: "英語第五", score: 77 },
          { name: "英語第六", score: 77 },
          { name: "英語第七", score: 63 },
          { name: "英語第八", score: 80 }
        ];
        const expected = ["英語第二", "英語第四", "英語第七"];
        const ans = f(subjects, 65);
        if (is_same_array(ans, expected)) {
          ac();
        } else {
          wa();
        }
      }
    },
    {
      name: 'その他',
      judge: (f, ac, wa, { is_same_array }) => {
        const scores = [60, 80, 34, 84, 37, 16, 98, 41, 59, 2, 86, 87, 27, 96, 34, 6, 87, 49, 23, 5, 49, 43, 91, 23, 33, 94, 47, 24, 31, 94, 17, 81, 28, 74, 1, 43, 99, 97, 75, 7, 42, 66, 14, 19, 11, 11, 83, 88, 11, 22, 65, 28, 28, 85, 91, 85, 91, 33, 59, 12, 9, 11, 86, 29, 96, 17, 31, 32, 91, 68, 13, 0, 33, 44, 84, 70, 25, 30, 7, 46, 9, 75, 58, 34, 91, 55, 84, 36, 32, 31, 26, 70, 86, 80, 54, 56, 57, 15, 87, 30];
        const subjects = [];
        const expected = [];
        const max = 65;
        for (let i = 0; i < scores.length; i++) {
          const score = scores[i];
          const name = `s${i}`;
          subjects.push({ name, score });
          if (score <= max) {
            expected.push(name);
          }
        }
        const ans = f(subjects, max);
        if (is_same_array(ans, expected)) {
          ac();
        } else {
          wa();
        }
      }
    }
  ]
};