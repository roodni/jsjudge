import Vue from 'vue';
import VueRouter from 'vue-router';
import setTitle from '../utils/set-title';
import PageNotFound from '../components/page-not-found';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import('../components/page-top'),
    meta: {
      title: 'ようこそ'
    }
  },
  {
    path: '/problems',
    component: () => import('../components/problems-index'),
    meta: {
      title: '問題一覧'
    }
  },
  {
    path: '/problems/:src',
    component: () => import('../components/problem-judge'),
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