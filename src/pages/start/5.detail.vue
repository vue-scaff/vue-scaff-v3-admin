<template>
  <div class="detail">
    <vs-section>
      <template #header>
        <a-typography-title :level="4">Default Options</a-typography-title>
      </template>

      <a-space direction="vertical">
        <a-button type="primary" @click="defaultVisual = true">Default Options: {{ defaultVisual }}</a-button>
      </a-space>

      <!-- defaultVisual -->
      <bs-drawer v-model:visible="defaultVisual" title="Title Here">
        <a-typography>
          <a-typography-text type="danger">Content in Detail Page - Default Options</a-typography-text>
        </a-typography>
      </bs-drawer>
    </vs-section>

    <vs-section>
      <template #header>
        <a-typography-title :level="4">Percentage</a-typography-title>
      </template>

      <a-typography>
        <a-slider v-model:value="size" :min="0" :max="100" :step="5" :tip-formatter="v => `${v}%`" :tooltip-visible="true" />
      </a-typography>

      <a-space direction="vertical">
        <a-button type="primary" @click="sizeVisual = true">Percentage: {{ sizeVisual }}</a-button>
      </a-space>

      <!-- Drawer - Percentage -->
      <bs-drawer v-model:visible="sizeVisual" :size="`${size}%`" title="Title Here">
        <a-typography>
          <a-typography-text type="danger">Content in Detail Page - Percentage</a-typography-text>
        </a-typography>
      </bs-drawer>
    </vs-section>

    <!-- Example Slots -->
    <vs-section>
      <template #header>
        <a-typography-title :level="4">Slots Example - Header, Footer, Affix</a-typography-title>
      </template>

      <a-button type="primary" @click="slotsVisual = true">Slots Example: {{ slotsVisual }}</a-button>

      <!-- Drawer - slotsVisual -->
      <bs-drawer v-model:visible="slotsVisual">
        <template #title>Title by Slot</template>
        <template #footer>
          <vs-flex justify="end">
            <a-space>
              <a-button type="primary">Submit</a-button>
              <a-button>Reset</a-button>
            </a-space>
          </vs-flex>
        </template>

        <template #affix>
          <share-alt-outlined :style="{ fontSize: `18px` }" />
        </template>

        <a-typography>
          <a-typography-text type="danger">Content in Detail Page - Slots</a-typography-text>
        </a-typography>
      </bs-drawer>
    </vs-section>

    <!-- Antv Large Mode -->
    <vs-section>
      <template #header>
        <a-typography-title :level="4">Antv Large Mode Support</a-typography-title>
      </template>

      <a-button type="primary" @click="largeVisual = true">Antv Large Mode Support: {{ largeVisual }}</a-button>

      <!-- Drawer - largeVisual -->
      <bs-drawer v-model:visible="largeVisual" size="large" title="Title Here">
        <a-typography>
          <a-typography-text type="danger">Content in Detail Page - Antv Large Mode Support</a-typography-text>
        </a-typography>
      </bs-drawer>
    </vs-section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      size: 50,

      defaultVisual: false,
      sizeVisual: false,
      slotsVisual: false,
      largeVisual: false,
    };
  },
};
</script>
