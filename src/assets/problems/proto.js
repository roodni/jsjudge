import md from './proto.md';

export default {
  markdown: md,
  args_default: 'obj, key',
  testcases: [
    {
      name: 'サンプル',
      judge: (f, ac, wa) => {
        const data = [
          [{a: 12}, 'a', 0],
          [{a: 12}, 'b', -1],
          [{a: 12}, 'toString', 1], 
          [[], 'toString', 1],
          [[], 'hasOwnProperty', 2]
        ];
        for (let i = 0; i < data.length; i++) {
          if (f(data[i][0], data[i][1]) !== data[i][2]) {
            wa();
            return;
          }
        }
        ac();
      }
    },
    {
      name: 'その他',
      judge: (f, ac, wa) => {
        const data = [
          [[], 'hasOwnProperty', 2],
          [{a: 12}, 'a', 0],
          [{a: 12}, 'toString', 1], 
          [{a: 12}, 'b', -1],
          [[], 'toString', 1],
          [self, 'undefined', 0],
          [self, 'null', -1]
        ];
        for (let i = 0; i < data.length; i++) {
          if (f(data[i][0], data[i][1]) !== data[i][2]) {
            wa();
            return;
          }
        }
        ac();
      }
    }
  ]
};