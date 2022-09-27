<template>
  <div class="table">
    <vs-section>
      <!-- 1st -->
      <a-typography-title :level="4">1. Default Table</a-typography-title>

      <bs-table :source="start.top10" />
    </vs-section>

    <vs-section>
      <a-form>
        <a-form-item label="MODE">
          <a-switch v-model:checked="mode" />
          <a-typography-text disabled> &gt; false: merge; true: or;</a-typography-text>
        </a-form-item>
      </a-form>

      <!-- 2nd -->
      <a-typography-title :level="4">2. Change Headers Mode</a-typography-title>

      <bs-table :mode="mode" :source="start.top10" :columns="columns" />
    </vs-section>

    <vs-section>
      <!-- 3rd -->
      <a-typography-title :level="4">3. Use Slot</a-typography-title>

      <bs-table :source="start.top10" :columns="columns" :mode="true">
        <!-- data, header -->
        <template #column="{ data, header }">
          <template v-if="header.key === `action`">
            <a-button type="primary">Thumbs Up</a-button>
          </template>
        </template>
      </bs-table>
    </vs-section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mode: 0,

      columns: [
        {
          title: 'NAME LARGE',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'NO',
          dataIndex: 'no',
          key: 'no',
        },
        {
          title: 'TEAM',
          dataIndex: 'team',
          key: 'team',
        },
        {
          title: 'ACT',
          dataIndex: 'action',
          key: 'action',
          width: 120,
        },
      ],
    };
  },
};
</script>
