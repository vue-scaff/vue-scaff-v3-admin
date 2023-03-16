<template>
  <vs-section>
    <template #header>
      <a-typography-title :level="4">Example Query Update</a-typography-title>
    </template>

    <!-- Form -->
    <a-form :label-col="{ span: 4 }">
      <a-form-item label="Name">
        <a-input v-model:value="source.name" />
      </a-form-item>
      <a-form-item label="Address">
        <a-input v-model:value="source.address" />
      </a-form-item>
    </a-form>

    <!-- Transfer -->
    <bs-query v-model:source="source" />
  </vs-section>
</template>

<script>
export default {
  data() {
    return {
      source: {
        name: '',
        address: '',
      },
    };
  },
};
</script>
