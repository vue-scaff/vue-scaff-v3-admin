<style lang="less">
.section {
  &:first-child {
    margin-top: @unit;
  }

  margin-left: @unit;
  margin-right: @unit;
  margin-bottom: @unit;

  border-radius: @radius * 2;
  background-color: @white;

  &--header,
  &--footer,
  &--container {
    padding: @unit;
  }

  &--header {
    border-bottom: 1px solid @section-color-line;
  }
  &--footer {
    border-top: 1px solid @section-color-line;
  }
}
</style>

<template>
  <div class="section">
    <vs-flex class="section--header" justify="between" v-if="$slots.header || $slots.affix">
      <slot name="header" />
      <vs-flex class="section--affix" v-if="$slots.affix">
        <slot name="affix" />
      </vs-flex>
    </vs-flex>
    <div class="section--container">
      <slot />
    </div>
    <div class="section--footer" v-if="$slots.footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'vs-section',

  props: {
    css: {
      type: [Object],
      default: {},
    },
    headerCss: {
      type: [Object],
      default: {},
    },
    footerCss: {
      type: [Object],
      default: {},
    },
  },
};
</script>
