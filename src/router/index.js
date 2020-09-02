import Vue from 'vue';
import VueRouter from 'vue-router';
import PageTop from '../components/page-top';
import PageNotFound from '../components/page-not-found';
import ProblemsIndex from '../components/problems-index';
import ProblemJudge from '../components/problem-judge';
import setTitle from '../utils/set-title';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: PageTop,
    meta: {
      title: 'ようこそ'
    }
  },
  {
    path: '/problems',
    component: ProblemsIndex,
    meta: {
      title: '問題一覧'
    }
  },
  {
    path: '/problems/:src',
    component: ProblemJudge,
    props: true
  },
  {
    path: '/*',
    component: PageNotFound,
    meta: {
      title: 'ページが存在しない'
    }
  }
];

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  const title = to.meta['title'];
  if (title) {
    setTitle(title);
  }
  next();
});

export default router;