<template>
  <vs-section>
    <template #affix>
      <component :is="`star-${['outlined', 'filled'][+fav]}`" @click="fav = !fav" :spin="true" :style="{ fontSize: `18px` }" />
    </template>
    <template #header>
      <a-typography-title :level="3">VUE SCAFF ADMIN</a-typography-title>
    </template>

    <http :api="$api.mock" :responseInterceptor="responseInterceptorHandler" v-slot="{ data }" ref="http">
      <a-typography-title :level="4">Hi there! 😜</a-typography-title>
      <a-typography-paragraph>I'm {{ data.author + (Math.random() * 10000).toFixed(0) }}, a web developer. And author of vue-scaff.</a-typography-paragraph>

      <a-button type="primary" @click="$refs.http.refresh">Refresh</a-button>

      <a-divider />

      <a-typography-title :level="5">Front-End Skills</a-typography-title>

      <a-typography-paragraph>
        <div>
          <img alt="html5" src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
          <img alt="css3" src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
          <img alt="javascript" src="https://img.shields.io/badge/JAVASCRIPT-323330?style=for-the-badge&logo=javascript" />
          <img alt="typescript" src="https://img.shields.io/badge/TYPESCRIPT-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
        </div>

        <div>
          <img alt="vue.js" src="https://img.shields.io/badge/vue.js-35495E?style=for-the-badge&logo=vue.js" />
          <img alt="react" src="https://img.shields.io/badge/react-20232A?style=for-the-badge&logo=react" />
          <img alt="angular" src="https://img.shields.io/badge/angular-DD0031?style=for-the-badge&logo=angular" />
        </div>

        <div>
          <img alt="flutter" src="https://img.shields.io/badge/flutter-02569B?style=for-the-badge&logo=flutter&logoColor=white" />
          <img alt="electron" src="https://img.shields.io/badge/electron-47848F?style=for-the-badge&logo=electron&logoColor=white" />
        </div>

        <div>
          <img alt="graphql" src="https://img.shields.io/badge/graphql-E10098?style=for-the-badge&logo=graphql&logoColor=white" />
          <img alt="apollo" src="https://img.shields.io/badge/apollo-311C87?style=for-the-badge&logo=apollo%20graphql&logoColor=white" />
          <img alt="sequelize" src="https://img.shields.io/badge/sequelize-52B0E7?style=for-the-badge&logo=sequelize&logoColor=white" />
        </div>

        <div>
          <img alt="webpack" src="https://img.shields.io/badge/webpack-2B3A42?style=for-the-badge&logo=webpack&logoColor=white" />
          <img alt="vite" src="https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
        </div>
      </a-typography-paragraph>

      <a-typography-title :level="5">Back-End Skills</a-typography-title>

      <a-typography-paragraph>
        <div>
          <img alt="node.js" src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" />
          <img alt="deno" src="https://img.shields.io/badge/deno-black?style=for-the-badge&logo=deno" />
          <img alt="express" src="https://img.shields.io/badge/express-white?style=for-the-badge&logo=express&logoColor=black" />
          <img alt="koa" src="https://img.shields.io/badge/koa-33333D?style=for-the-badge&logo=koa" />
        </div>

        <div>
          <img alt="php" src="https://img.shields.io/badge/php-5A5E9F?style=for-the-badge&logo=php&logoColor=white" />
          <img alt="laravel" src="https://img.shields.io/badge/laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white" />
        </div>

        <div>
          <img alt="mongodb" src="https://img.shields.io/badge/mongo-116149?style=for-the-badge&logo=mongodb&logoColor=white" />
          <img alt="mysql" src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white" />
        </div>
      </a-typography-paragraph>

      <a-typography-title :level="5">Tools</a-typography-title>

      <a-typography-paragraph>
        <div>
          <img alt="Visual Studio Code" src="https://img.shields.io/badge/visua_studio_code-0078d7?style=for-the-badge&logo=visual-studio-code&logoColor=white" />
          <img alt="WebStorm" src="https://img.shields.io/badge/webstorm-black.svg?style=for-the-badge&logo=webstorm&logoColor=white" />
          <img alt="Atom" src="https://img.shields.io/badge/atom-33896F?style=for-the-badge&logo=atom&logoColor=white" />
          <img alt="Sketch" src="https://img.shields.io/badge/sketch-F3840F?style=for-the-badge&logo=sketch&logoColor=white" />
          <img alt="Photoshop" src="https://img.shields.io/badge/photoshop-114468?style=for-the-badge&logo=adobe-photoshop&logoColor=white" />
        </div>
      </a-typography-paragraph>

      <a-divider />

      <a-typography-title :level="5">Contribute</a-typography-title>

      <a-typography-paragraph>
        <a href="https://github.com/joenix"><img src="https://camo.githubusercontent.com/aaa90fbcbbf5f95d8a34526d97ae227dbbf4bca51ec954683ddb8bed7f0bdfcf/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d6a6f656e6978" alt="joenix' GitHub Stats" data-canonical-src="https://github-readme-stats.vercel.app/api?username=joenix" style="max-width: 100%" /></a>
      </a-typography-paragraph>
    </http>
  </vs-section>
</template>

<script>
export default {
  data() {
    return {
      fav: false,
    };
  },
  methods: {
    responseInterceptorHandler(data) {
      data.a = 1;
      return data;
    },
  },
};
</script>
