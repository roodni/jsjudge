import Vue from 'vue';
import VueRouter from 'vue-router';
import PageTop from '../components/page-top';
import PageNotFound from '../components/page-not-found';
import ProblemsIndex from '../components/problems-index';
import ProblemJudge from '../components/problem-judge';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: PageTop
  },
  {
    path: '/problems',
    component: ProblemsIndex
  },
  {
    path: '/problems/:src',
    component: ProblemJudge,
    props: true
  },
  {
    path: '/*',
    component: PageNotFound
  }
];

const router = new VueRouter({
  routes
});

export default router;