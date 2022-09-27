<template>
  <div class="http">
    <vs-section>
      <template #header>
        <a-typography-title :level="4">1. Default Use</a-typography-title>
      </template>

      <http :api="$api.mock" v-slot="{ data }">
        <a-typography>
          <pre>{{ data }}</pre>
        </a-typography>
      </http>
    </vs-section>

    <vs-section>
      <template #header>
        <a-typography-title :level="4">2. Refresh</a-typography-title>
      </template>

      <http :api="$api.mock" v-slot="{ data }" ref="httpRefresh">
        <a-typography-paragraph> I am {{ data.author }}, I have ${{ data.cash - (Math.random() * 10 ** 2).toFixed(0) }} </a-typography-paragraph>
        <a-button type="primary" @click="$refs.httpRefresh.refresh">Refresh</a-button>
      </http>
    </vs-section>

    <vs-section>
      <template #header>
        <a-typography>
          <a-typography-title :level="4">3. Send Request by Get or Post</a-typography-title>
          <a-typography-text disabled>Set `immediate` and `wait` to false</a-typography-text>
        </a-typography>
      </template>

      <http :api="condition.api" :params="condition" v-slot="{ data }" :immediate="false" :wait="false" ref="httpResend" :requestInterceptor="requestInterceptorHandle" :responseInterceptor="responseInterceptorHandle">
        <a-row>
          <a-col :span="12">
            <a-typography>
              <a-typography-text type="success" mark>See Request in Console</a-typography-text>
              <a-typography-text type="success">, Merge Response into Condition</a-typography-text>
            </a-typography>

            <br />

            <a-form :label-col="{ span: 4 }">
              <a-form-item label="api">
                <a-input v-model:value="condition.api" />
              </a-form-item>
              <a-form-item label="author">
                <a-input v-model:value="condition.author" />
              </a-form-item>
              <a-form-item label="cash">
                <a-input-number v-model:value="condition.cash" :min="0" :max="100" :step="5" />
              </a-form-item>
              <a-form-item label="time">
                <a-mentions v-model:value="condition.time" readonly />
              </a-form-item>

              <a-form-item :wrapper-col="{ offset: 4 }">
                <a-space>
                  <a-button type="primary" @click="$refs.httpResend.get(condition)">Send Get Request</a-button>
                  <a-button type="primary" @click="$refs.httpResend.post(condition)">Send Post Request</a-button>
                </a-space>
              </a-form-item>
            </a-form>
          </a-col>
        </a-row>
      </http>
    </vs-section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      condition: {
        api: this.$api.mock, // 'https://dentalx-order-manage-fat01.lctest.cn/api/v1/advice/empty',
        author: null,
        cash: 0,
        time: null,
      },
    };
  },

  methods: {
    // Request Interceptor
    requestInterceptorHandle(data, headers) {
      return { data, headers };
    },

    // Response Interceptor
    responseInterceptorHandle(data) {
      // Get Time Now
      data.time = new Date().getTime() + '';

      // Merge Response into Condition
      Object.assign(this.condition, data);

      // Update Response Data
      return data;
    },
  },
};
</script>
