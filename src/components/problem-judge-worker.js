const postMessage = self.postMessage;
const close = self.close;

delete self.postMessage;
delete self.console;

addEventListener('message', e => {
  const data = e.data;
  const key = data.key;
  const args = data.args;
  const code = data.code;
  const judge_code = data.judge_code;

  let submited_func;
  try {
    submited_func = new Function(args, code);
  } catch (e) {
    postMessage({
      key: key,
      res: 'SE',
      err: e
    });
    close();
    return;
  }
  const accept = () => {
    postMessage({
      key: key,
      res: 'AC'
    });
    close();
  };
  const reject = (msg='') => {
    postMessage({
      key: key,
      res: 'WA',
      err: msg
    });
    close();
  };
  const libs = {
    is_same_array: (a1, a2) => {
      try {
        if (a1.length === a2.length) {
          for (let i = 0; i < a1.length; i++) {
            const v1 = a1[i];
            const v2 = a2[i];
            if (v1 !== v2) {
              return false;
            }
          }
          return true;
        }
        return false;
      } catch (e) {
        return false;
      }
    }
  };
  const judge_func = new Function('...args', `(${judge_code})(...args);`);
  judge_func(submited_func, accept, reject, libs);
});