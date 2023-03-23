<style lang="less">
.content {
  padding: 2rem;
}
</style>

<template>
  <a-space direction="vertical" class="content" :style="{ width: '640px' }">
    <a-select v-model:value="engine" :options="engineOptions" />

    <a-form :modal="dataForm" :label-col="{ span: 8 }" @submit="formSubmit">
      <a-input-group compact>
        <a-input v-model:value="inputMessage" />
      </a-input-group>
    </a-form>

    <a-collapse v-model:activeKey="activeKey">
      <a-collapse-panel v-for="(chat, index) in messages" :key="index" :header="chat.ask">
        {{ chat.answer }}
      </a-collapse-panel>
    </a-collapse>
  </a-space>
</template>

<script>
import { Configuration, OpenAIApi } from 'openai';
// const { Configuration, OpenAIApi } = require('openai');

console.log(Configuration, OpenAIApi);

export default {
  data() {
    return {
      // 输入信息
      inputMessage: '',
      messages: [],
      activeKey: [],

      engine: 'text-davinci-003',

      engineOptions: [
        {
          label: 'babbage',
          value: 'babbage',
        },
        {
          label: 'davinci',
          value: 'davinci',
        },
        {
          label: 'text-davinci-001',
          value: 'text-davinci-001',
        },
        {
          label: 'ada',
          value: 'ada',
        },
        {
          label: 'curie-instruct-beta',
          value: 'curie-instruct-beta',
        },
        {
          label: 'text-curie-001',
          value: 'text-curie-001',
        },
        {
          label: 'code-cushman-001',
          value: 'code-cushman-001',
        },
        {
          label: 'text-ada-001',
          value: 'text-ada-001',
        },
        {
          label: 'code-davinci-002',
          value: 'code-davinci-002',
        },
        {
          label: 'code-davinci-003',
          value: 'code-davinci-003',
        },
        {
          label: 'davinci-instruct-beta',
          value: 'davinci-instruct-beta',
        },
        {
          label: 'text-babbage-001',
          value: 'text-babbage-001',
        },
        {
          label: 'curie',
          value: 'curie',
        },
        {
          label: 'text-davinci-002',
          value: 'text-davinci-002',
        },
      ],

      dataForm: {
        prompt: '',
        max_tokens: 150,
        temperature: 0.7,
        // stop: '\n',
      },

      apikey: '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',
    };
  },

  watch: {
    messages: {
      handler() {
        const a = [];

        for (let i = 0; i < this.messages.length; i++) {
          a.push(i);
        }

        this.activeKey = a;
      },

      deep: true,
      immediate: true,
    },
  },

  methods: {
    // API
    uri() {
      return `https://api.openai.com/v1/engines/${this.engine}/completions`;
    },

    // 将用户输入发送到ChatGPT API
    async sendMessage(input) {
      // Params
      this.dataForm.prompt = input;

      // Headers
      const headers = { accept: '*/*', 'Content-Type': 'application/json', Authorization: 'Bearer ' + this.apikey };

      // Get Response
      const { choices } = await this.$http(this.uri()).post({ ...this.dataForm }, { headers });

      // Response
      return choices[0].text.trim();
    },

    // Enter Message
    async formSubmit() {
      // Get Ask
      const ask = this.inputMessage.trim();

      // No Message
      if (!ask) {
        return;
      }

      // Get Answer
      const answer = await this.sendMessage(ask);

      // Pushing
      this.messages.push({ ask, answer });

      // Clean Message
      this.inputMessage = '';
    },
  },
};
</script>
