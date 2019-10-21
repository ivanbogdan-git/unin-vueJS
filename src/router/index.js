import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home';
import Users from '@/pages/Users';
import Comments from '@/pages/Comments';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/users',
      name: 'users',
      component: Users,
    },
    {
      path: '/comments',
      name: 'comments',
      component: Comments,
    },
  ],
});
