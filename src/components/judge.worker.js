const postMessage = self.postMessage;
const close = self.close;

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
            err: e.toString()
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
    const reject = () => {
        postMessage({
            key: key,
            res: 'WA'
        });
        close();
    };
    const judge_func = new Function('...args', `(${judge_code})(...args);`);
    judge_func(submited_func, accept, reject);
});