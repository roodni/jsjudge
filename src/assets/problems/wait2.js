import markdown from './wait2.md';

export default {
  markdown,
  args_default: 'f1, f2, callback',
  testcases: [
    {
      name: '易 (待機時間 = 0.5秒)',
      judge: (f, ac, wa) => {
        const setTimeout = self.setTimeout;
        const wait = 500;
        const [v1, v2] = [Math.random(), Math.random()];
        const create_arg = (v, name) => g => {
          if (typeof g !== 'function') {
            wa(`関数${name}の引数に関数を与えて下さい`);
            return;
          }
          setTimeout(() => { g(v); }, wait);
        };
        const callback = res => {
          if (res === v1 + v2) {
            ac();
          } else {
            wa();
          }
        };
        f(create_arg(v1, 'f1'), create_arg(v2, 'f2'), callback);
      }
    },
    {
      name: '難 (待機時間 = 1.5秒)',
      judge: (f, ac, wa) => {
        const setTimeout = self.setTimeout;
        const wait = 1500;
        const [v1, v2] = [Math.random(), Math.random()];
        const create_arg = (v, name) => g => {
          if (typeof g !== 'function') {
            wa(`関数${name}の引数に関数を与えて下さい`);
            return;
          }
          setTimeout(() => { g(v); }, wait);
        };
        const callback = res => {
          if (res === v1 + v2) {
            ac();
          } else {
            wa();
          }
        };
        f(create_arg(v1, 'f1'), create_arg(v2, 'f2'), callback);
      }
    }
  ]
};