export default ({ $http, $api }) => {
  const state = {};

  const mutations = {};

  const actions = {
    async GET_MOCK() {
      return await $http($api.mock).get();
    },
  };

  return { state, mutations, actions };
};
