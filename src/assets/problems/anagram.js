import md from './anagram.md';

export default {
  markdown: md,
  args_default: "s1, s2",
  testcases: [
    {
      name: 'サンプル',
      judge: (f, ac, wa) => {
        const cases = [
          ['Dormitory', 'Dirty Room', true],
          ['kuwa', 'numa', false]
        ];
        for (const c of cases) {
          const s1 = c[0];
          const s2 = c[1];
          const expected = c[2];
          if (f(s1, s2) !== expected) {
            wa(`"${s1}", "${s2}"`);
            return;
          }
        }
        ac();
      }
    },
    {
      name: 'その他',
      judge: (f, ac, wa) => {
        const cases = [
          ['Christmas', 'trims cash', true],
          ['abc', 'cba', true],
          ['aab', 'abb', false],
          ['Hello', 'ha haha', false],
          ['a', 'a   ', true]
        ];
        for (const c of cases) {
          const s1 = c[0];
          const s2 = c[1];
          const expected = c[2];
          if (f(s1, s2) !== expected) {
            wa();
            return;
          }
        }
        ac();
      }
    }
  ]
};