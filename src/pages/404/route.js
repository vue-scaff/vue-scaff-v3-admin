export default () => {
  return {
    path: '/404',
    name: '404',
    hidden: true,
    component: () => import('@/pages/404/index.vue'),
  };
};
