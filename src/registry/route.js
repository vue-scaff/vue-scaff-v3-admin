// Get Token from localStorage
const token = localStorage.getItem('token');

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
      name: 'start',
    },
    hidden: true,
  },
];
