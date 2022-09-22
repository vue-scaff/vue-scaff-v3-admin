export default ({}) => {
  // Get Oss from Scaff Configure
  const { oss } = process.env.scaff.conf;

  const state = {
    // Metas for Site
    meta: {
      oss,
      logo: `${oss}/vue-scaff-fox.png`,
      title: `VUE SCAFF ADMIN`,
      subTitle: `FAST & CONFIGURABLE`,
      avatar: `https://oss.vue-scaff.com/oss/avatar.gif`,
    },

    // Minify for Aside
    minify: false,
  };

  const mutations = {
    UPDATE_MINIFY(state, minify) {
      state.minify = minify;
    },
  };

  const actions = {
    UPDATE_MINIFY({ commit }, minify) {
      commit('UPDATE_MINIFY', minify);
    },
  };

  return { state, mutations, actions };
};
