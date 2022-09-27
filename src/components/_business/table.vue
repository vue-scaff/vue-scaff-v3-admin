<template>
  <div class="table">
    <!-- Lister -->
    <a-table v-if="source.length" :columns="headers" :dataSource="source" :pagination="pagination">
      <template #bodyCell="{ column, record }">
        <slot name="column" :header="column" :data="record" />
      </template>
    </a-table>

    <!-- Empty -->
    <a-empty v-else />
  </div>
</template>

<script>
export default {
  name: 'bs-table',

  props: {
    /**
     * 0 | false: MERGE
     * 1 | true:  OR
     * ======== ======= ========
     */
    mode: {
      type: [Number, Boolean],
      default: 0,
    },

    columns: {
      type: [Array],
      default: [],
    },

    source: {
      type: [Array],
      default: [],
    },

    pagination: {
      type: [Object],
      default: {},
    },
  },

  computed: {
    headers() {
      // Mode OR
      if (this.columns.length && this.mode) {
        return this.columns;
      }

      // Auto create Headers from  Source
      const headers = this.$util.foreach(this.source[0], (value, key, index) => {
        return { title: key, dataIndex: key, key };
      });

      // Mode MERGE
      if (this.columns.length && !this.mode) {
        this.columns.forEach(column => {
          if (headers[column.key]) {
            headers[column.key] = Object.assign(headers[column.key], column);
          }
        });
      }

      // New Headers
      return Object.values(headers);
    },
  },
};
</script>
