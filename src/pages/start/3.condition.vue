<template>
  <div class="condition">
    <bs-condition v-model:source="start.conditions" :api="$api.mock" @modify="modifyHandle" @submit="submitHandle">
      <!-- Name -->
      <template #name="{ field }">
        <a-select v-model:value="field.value">
          <a-select-option v-for="option in field.options" :value="option.value">{{ option.label }}</a-select-option>
        </a-select>
      </template>

      <!-- No. -->
      <template #no="{ field }">
        <a-radio-group v-model:value="field.value" button-style="solid">
          <a-radio-button v-for="option in field.options" :value="option.value">{{ option.label }}</a-radio-button>
        </a-radio-group>
      </template>

      <!-- Pos. -->
      <template #pos="{ field }">
        <a-select v-model:value="field.value">
          <a-select-option v-for="option in field.options" :value="option.value">{{ option.label }}</a-select-option>
        </a-select>
      </template>

      <!-- Team -->
      <template #team="{ field }">
        <a-select v-model:value="field.value">
          <a-select-option v-for="option in field.options" :value="option.value">{{ option.label }}</a-select-option>
        </a-select>
      </template>

      <!-- Super -->
      <template #super="{ field }">
        <a-switch v-model:checked="field.value" checked-children="Yes" un-checked-children="No" />
      </template>

      <!-- Time -->
      <template #start>
        <a-range-picker format="YYYY-MM-DD" :placeholder="['Start Time', 'End Time']" @change="onRangeChange" />
      </template>
    </bs-condition>

    <vs-section>
      <a-typography-paragraph>
        <a-typography-title>Condition Options</a-typography-title>
        <pre><code>{{ start.conditions }}</code></pre>
      </a-typography-paragraph>
    </vs-section>

    <bs-query :source="querySync"></bs-query>
  </div>
</template>

<script>
export default {
  data() {
    return {
      querySync: {},
    };
  },

  methods: {
    modifyHandle(data) {
      this.querySync = data;
    },

    submitHandle(data) {
      this.$message.info(JSON.stringify(data));
    },

    onRangeChange(date) {
      const [start, end] = date;

      this.querySync.start = `${start.$y}-${start.$M}-${start.$D}`;
      this.querySync.end = `${end.$y}-${end.$M}-${end.$D}`;
    },
  },
};
</script>
