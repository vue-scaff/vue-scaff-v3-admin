import { layout } from 'vue-scaff-admin-components';

export default () => {
  return {
    path: '/links',
    name: 'links',
    redirect: {
      name: 'links-index',
    },
    meta: {
      index: 900,
      title: 'LINKS',
      icon: 'ordered-list-outlined',
    },
    component: layout,
    children: [
      {
        path: '/links/index',
        name: 'links-index',
        meta: {
          index: 901,
          title: 'REPOS',
        },
        component: () => import('@/pages/links/index.vue'),
      },
    ],
  };
};
