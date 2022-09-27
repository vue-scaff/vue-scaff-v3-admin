<style lang="less">
.drawer {
  :deep(.ant-drawer-content-wrapper) {
    width: calc(100vw) !important;
  }
}
</style>

<template>
  <a-drawer class="drawer" v-model:visible="visible" placement="right" :size="size" :width="width" :title="title" @after-visible-change="visibleHandle">
    <template #extra>
      <slot name="affix" />
    </template>

    <template #title v-if="$slots.title">
      <slot name="title" />
    </template>

    <template #footer v-if="$slots.footer">
      <slot name="footer" />
    </template>

    <slot />
  </a-drawer>
</template>

<script>
export default {
  name: 'bs-drawer',

  props: {
    visible: {
      type: [Boolean],
      default: false,
    },

    title: {
      type: [String],
      default: null,
    },

    size: {
      type: [String, Number],
      default: 'full',
    },
  },

  computed: {
    width() {
      if (this.size === `full`) {
        return document.body.clientWidth - 270;
      }

      if (/\%$/.test(this.size)) {
        return document.body.clientWidth * (this.size.replace('%', '') / 100);
      }

      return undefined;
    },
  },

  methods: {
    visibleHandle(visual) {
      this.$emit('update:visible', visual);
    },
  },
};
</script>
