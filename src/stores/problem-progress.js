import Vue from 'vue';

const createKey = problem_src => `problem-${problem_src}`;
const values = {
  SOLVED: 's',  // すべてのケースが正答になった
  PARTIALLY: 'p', // 1つ以上のケースが正答になった
  N_A: 'na'  // それ以外
};
Object.freeze(values);
const isValidValue = value => Object.values(values).includes(value);

export default {
  state: {},
  values,
  setProgress(problem_src, progress) {
    const key = createKey(problem_src);
    if (isValidValue(progress)) {
      Vue.set(this.state, key, progress);
      try {
        localStorage.setItem(key, progress);
      } catch (e) {
        console.error(e);
      }
    } else {
      console.warn('invalid progress value:', progress);
    }
  },
  getProgress(problem_src) {
    const key = createKey(problem_src);
    if (!(key in this.state)) {
      // データに含まれていなければ未追跡なので
      // 追跡できるよう設定する
      Vue.set(
        this.state, key,
        localStorage.getItem(key) ?? values.N_A
      );
    }
    // computedの依存関係に含めるため、追跡済のプロパティを参照する
    let progress = this.state[key];
    if (isValidValue(progress)) {
      return progress;
    } else {
      console.warn('invalid progress value:', progress);
      progress = values.N_A;
      this.state[key] = progress;
      return progress;
    }
  }
};