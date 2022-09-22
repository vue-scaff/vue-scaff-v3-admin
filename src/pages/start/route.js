import component from '@/components/layout/index.vue';

export default () => {
  return {
    path: '/start',
    name: 'start',
    redirect: {
      name: 'start-overview',
    },
    meta: {
      index: 100,
      title: 'START',
      icon: 'coffee-outlined',
    },
    component,
    children: [
      {
        path: '/start/overview',
        name: 'start-overview',
        meta: {
          index: 101,
          title: 'OVERVIEW',
        },
        component: () => import('@/pages/start/overview.vue'),
      },
      {
        path: '/start/table',
        name: 'start-table',
        meta: {
          index: 102,
          title: 'TABLE',
        },
        component: () => import('@/pages/start/table.vue'),
      },
      {
        path: '/start/grid',
        name: 'start-grid',
        meta: {
          index: 103,
          title: 'GRID',
        },
        component: () => import('@/pages/start/grid.vue'),
      },
    ],
  };
};
