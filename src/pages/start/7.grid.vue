<style lang="less">
.grid--item {
  text-align: center;

  color: @white;
  background-color: @primary;
  padding: @atom 0;

  &:nth-child(2n + 1) {
    background-color: lighten(@primary, 12%);
  }
}
</style>

<template>
  <div class="grid">
    <!-- {{ start.conditions }} -->
    <vs-section>
      <a-divider orientation="left">Flexible 4 -- Justify Start</a-divider>

      <vs-grid span="4" :source="start.conditions">
        <template #name="{ key }">
          <div>{{ key }}</div>
        </template>
        <template #no="{ key }">
          <div>{{ key }}</div>
        </template>
        <template #pos="{ key }">
          <div>{{ key }}</div>
        </template>
        <template #team="{ key }">
          <div>{{ key }}</div>
        </template>
      </vs-grid>
    </vs-section>

    <vs-section>
      <a-divider orientation="left">Flexible 3 -- Justify Start</a-divider>

      <vs-grid span="3" :source="start.conditions">
        <template #name="{ key }">
          <div>{{ key }}</div>
        </template>
        <template #no="{ key }">
          <div>{{ key }}</div>
        </template>
        <template #pos="{ key }">
          <div>{{ key }}</div>
        </template>
        <template #team="{ key }">
          <div>{{ key }}</div>
        </template>
      </vs-grid>
    </vs-section>

    <vs-section>
      <a-divider orientation="left">Flexible 6 -- Justify End</a-divider>

      <vs-grid span="6" :source="start.conditions" justify="end">
        <template #name="{ key }">
          <div>{{ key }}</div>
        </template>
        <template #no="{ key }">
          <div>{{ key }}</div>
        </template>
        <template #pos="{ key }">
          <div>{{ key }}</div>
        </template>
        <template #team="{ key }">
          <div>{{ key }}</div>
        </template>
        <template #super="{ key }">
          <div>{{ key }}</div>
        </template>
      </vs-grid>
    </vs-section>

    <vs-section>
      <a-divider orientation="left">Flexible 11 -- Justify Between</a-divider>

      <vs-grid span="11" :source="start.conditions" justify="between">
        <template #name="{ key }">
          <div>{{ key }}</div>
        </template>
        <template #no="{ key }">
          <div>{{ key }}</div>
        </template>
        <template #pos="{ key }">
          <div>{{ key }}</div>
        </template>
        <template #team="{ key }">
          <div>{{ key }}</div>
        </template>
        <template #super="{ key }">
          <div>{{ key }}</div>
        </template>
        <template #start="{ key }">
          <div>{{ key }}</div>
        </template>
        <template #end="{ key }">
          <div>{{ key }}</div>
        </template>
      </vs-grid>
    </vs-section>
  </div>
</template>
