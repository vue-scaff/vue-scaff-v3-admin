import component from '@/components/layout/index.vue';

export default () => {
  return {
    path: '/contact',
    name: 'contact',
    redirect: {
      name: 'contact-team',
    },
    meta: {
      index: 900,
      title: 'CONTACT',
      icon: 'ordered-list-outlined',
    },
    component,
    children: [
      {
        path: '/contact/team',
        name: 'contact-team',
        meta: {
          index: 901,
          title: 'TEAM',
        },
        component: () => import('@/pages/contact/team.vue'),
      },
    ],
  };
};
