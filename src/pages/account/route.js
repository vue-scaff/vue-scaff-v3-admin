export default () => {
  return {
    path: '/login',
    name: 'login',
    hidden: true,
    component: () => import('@/pages/account/login.vue'),
  };
};
