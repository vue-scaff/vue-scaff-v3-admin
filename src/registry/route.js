export default [
  {
    path: '/:pathMatch(.*)*',
    redirect: {
      name: '404',
    },
    hidden: true,
  },
  {
    path: '/',
    redirect: {
      name: 'start-overview',
    },
    hidden: true,
  },
];