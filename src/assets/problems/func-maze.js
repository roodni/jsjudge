import md from './func-maze.md';

export default {
  markdown: md,
  args_default: 'root',
  testcases: [
    {
      name: '上図の例',
      judge: (f, ac, wa) => {
        const create_node = (c0=null, c1=null, goal=null) => 
          a => {
            switch (a) {
            case 0:
              return c0;
            case 1:
              return c1;
            case "goal":
              return goal;
            default:
              {
                let msg;
                try {
                  msg = `不正な引数 ${a} が渡されました`;
                } catch (e) {
                  msg = `不正な引数が渡されました`;
                }
                wa(msg);
              }
              return;
            }
          };
        const key = Symbol();
        const goal = create_node(null, null, key);
        const F = create_node(goal);
        const E = create_node();
        const D = create_node();
        const C = create_node(F);
        const B = create_node(E, D);
        const A = create_node(B, C);
        if (f(A) === key) {
          ac();
        } else {
          wa('返値が違います');
        }
      }
    },
    {
      name: '大きめのケース',
      judge: (f, ac, wa) => {
        const create_node = (c0=null, c1=null, goal=null) => 
          a => {
            switch (a) {
            case 0:
              return c0;
            case 1:
              return c1;
            case "goal":
              return goal;
            default:
              {
                let msg;
                try {
                  msg = `不正な引数 ${a} が渡されました`;
                } catch (e) {
                  msg = `不正な引数が渡されました`;
                }
                wa(msg);
              }
              return;
            }
          };
        const key = Symbol();
        const nodes = [];
        for (let i = 0; i < 100; i++) {
          nodes.push(create_node());
        }
        nodes[30] = create_node(null, null, key);
        while (nodes.length > 1) {
          const parents = [];
          while (nodes.length > 0) {
            parents.push(
              create_node(nodes.pop(), nodes.pop() ?? null)
            );
          }
          for (const node of parents) {
            nodes.push(node);
          }
        }
        if (f(nodes[0]) === key) {
          ac();
        } else {
          wa('返値が違います');
        }
      }
    }
  ]
};