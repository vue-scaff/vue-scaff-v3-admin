// Use Map State
import { mapState } from 'vuex';

// Computed Stores
const storeMapping = mapState({
  // Global Store
  app: app => app,
  // Example
  start: ({ start }) => start,
});

// Export
export default {
  computed: {
    ...storeMapping,
  },
};
