export default ({ $http, $api }) => {
  const state = {
    top10: [
      {
        key: 101,
        name: 'MICHAEL JORDAN',
        no: 23,
        pos: 'SG',
        team: 'Chicago Bulls',
      },
      {
        key: 102,
        name: 'KOBE BRYANT',
        no: 24,
        pos: 'SG',
        team: 'Laker',
      },
      {
        key: 103,
        name: 'ALLEN IVERSON',
        no: 3,
        pos: 'SF',
        team: '76ers',
      },
    ],

    conditions: {
      name: {
        label: 'Name',
        value: '',
        options: [
          { label: 'MICHAEL JORDAN', value: 'MICHAEL JORDAN' },
          { label: 'KOBE BRYANT', value: 'KOBE BRYANT' },
          { label: 'ALLEN IVERSON', value: 'ALLEN IVERSON' },
        ],
      },
      no: {
        label: 'No.',
        value: '',
        options: [
          { label: 23, value: 23 },
          { label: 24, value: 24 },
          { label: 3, value: 3 },
        ],
      },
      pos: {
        label: 'Pos.',
        value: 'SG',
        options: [
          { label: 'C', value: 'C' },
          { label: 'PG', value: 'PG' },
          { label: 'PF', value: 'PF' },
          { label: 'SG', value: 'SG' },
          { label: 'SF', value: 'SF' },
        ],
      },
      team: {
        label: 'Team',
        value: '',
        options: [
          { label: '76ers', value: '76ers' },
          { label: 'Laker', value: 'Laker' },
          { label: 'Chicago Bulls', value: 'Chicago Bulls' },
        ],
      },
      super: {
        label: 'Super Star',
        value: true,
      },
      start: {
        label: 'Start Time',
        value: '2022-05-05',
      },
      end: {
        label: 'End Time',
        value: '2022-10-10',
      },
    },
  };

  const mutations = {};

  const actions = {
    async GET_MOCK() {
      return await $http($api.mock).get();
    },
  };

  return { state, mutations, actions };
};
