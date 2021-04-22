import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
const ProjectList = () =>
  import(/* webpackChunkName: "project-list" */ '../views/project/index.vue');

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    redirect: { name: 'project-list' },
  },
  {
    path: '/project',
    name: 'project-list',
    component: ProjectList,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
