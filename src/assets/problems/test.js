import md from './test.md';

export default {
  markdown: md,
  args_default: '',
  code_default:`\
let a = 0, b = 1;
return () => {
  [a, b] = [b, a + b];
  return b;
}`,
  testcases: [
    {
      name: '1回',
      judge: (f, ac, wa) => {
        const g = f();
        if (!(g instanceof Function)) {
          wa();
          return;
        }
        let a = 0, b = 1;
        for (let i = 0; i < 100; i++) {
          if (a + b !== g()) {
            wa();
            return;
          }
          [a, b] = [b, a + b];
        }
        ac();
      }
    },
    {
      name: '2回同時',
      judge: (f, ac, wa) => {
        const g = [f(), f()];
        if (!(g[0] instanceof Function && g[1] instanceof Function)) {
          wa();
          return;
        }
        const a = [0, 0];
        const b = [1, 1];
        for (let i = 0; i < 100; i++) {
          for (let j = 0; j < 2; j++) {
            if (a[j] + b[j] !== g[j]()) {
              wa();
              return;
            }
            [a[j], b[j]] = [b[j], a[j] + b[j]];
          }
        }
        ac();
      }
    },
    {
      name: '100回反復',
      judge: (f, ac, wa) => {
        for (let j = 0; j < 100; j++) {
          const g = f();
          if (!(g instanceof Function)) {
            wa();
            return;
          }
          let a = 0, b = 1;
          for (let i = 0; i < 100; i++) {
            if (a + b !== g()) {
              wa();
              return;
            }
            [a, b] = [b, a + b];
          }
          ac();
        }
      }
    },
    {
      name: '1秒後にACになるケース',
      judge: (f, ac) => {
        f();
        setTimeout(() => {ac();}, 1000);
      }
    }
  ]
};