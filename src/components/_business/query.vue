<template>
  <div class="query" />
</template>

<script>
export default {
  name: 'bs-query',

  props: {
    source: {
      type: [Object],
      default: {},
    },
  },

  watch: {
    source: {
      handler() {
        this.$router.replace({ query: { ...this.$route.query, ...this.source } }).finally(() => (this.respondToRouteChanges = true));
      },

      deep: true,
      immediate: true,
    },
  },
};
</script>
