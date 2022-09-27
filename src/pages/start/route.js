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
        component: () => import('@/pages/start/0.overview.vue'),
      },
      {
        path: '/start/http',
        name: 'start-http',
        meta: {
          index: 102,
          title: 'HTTP',
        },
        component: () => import('@/pages/start/1.http.vue'),
      },
      {
        path: '/start/query',
        name: 'start-query',
        meta: {
          index: 102,
          title: 'QUERY',
        },
        component: () => import('@/pages/start/2.query.vue'),
      },
      {
        path: '/start/condition',
        name: 'start-condition',
        meta: {
          index: 103,
          title: 'CONDITION',
        },
        component: () => import('@/pages/start/3.condition.vue'),
      },
      {
        path: '/start/table',
        name: 'start-table',
        meta: {
          index: 104,
          title: 'TABLE',
        },
        component: () => import('@/pages/start/4.table.vue'),
      },
      {
        path: '/start/detail',
        name: 'start-detail',
        meta: {
          index: 105,
          title: 'DETAIL',
        },
        component: () => import('@/pages/start/5.detail.vue'),
      },
      {
        path: '/start/editor',
        name: 'start-editor',
        meta: {
          index: 108,
          title: 'EDITOR',
        },
        component: () => import('@/pages/start/8.editor.vue'),
      },
      {
        path: '/start/grid',
        name: 'start-grid',
        meta: {
          index: 109,
          title: 'GRID',
        },
        component: () => import('@/pages/start/grid.vue'),
      },
    ],
  };
};
