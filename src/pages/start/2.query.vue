<template>
  <vs-section>
    <template #header>
      <a-typography-title :level="4">Example Query Update</a-typography-title>
    </template>

    <a-form :label-col="{ span: 4 }">
      <a-form-item label="Name">
        <a-input v-model:value="name" />
      </a-form-item>
      <a-form-item label="Address">
        <a-input v-model:value="address" />
      </a-form-item>
    </a-form>

    <!-- Transfer -->
    <bs-query :source="{ name, address }"></bs-query>
  </vs-section>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      address: '',
    };
  },
};
</script>
