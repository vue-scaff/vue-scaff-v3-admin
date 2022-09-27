<style lang="less">
.login {
  background-color: @white; // @aside-color-background;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  //   background-image: url(https://oss.vue-scaff.com/oss/hongkong.jpg);
  background-image: url(@/assets/hero-red.svg);

  &--board {
    box-shadow: 0 0 @space rgba(@black, 0.25);
    border-radius: @unit;
    background-color: @aside-color-deep;

    &--typography {
      &,
      .ant-typography {
        color: @white;
      }

      border-radius: @unit 0 0 @unit;
    }

    &--wrapper {
      border-radius: 0 @unit @unit 0;
      background-color: @white;
    }

    &--content {
      padding-top: @space;
    }
  }

  &--submit {
    width: 100%;
  }
}
</style>

<template>
  <vs-flex width="100vw" height="100vh" align="center" justify="center" class="login">
    <vs-flex width="800" height="640" class="login--board">
      <vs-flex-item flex="4" class="login--board--typography">
        <vs-flex direction="col" align="center" justify="center" height="100%">
          <a-avatar :size="120" :src="app.meta.logo" />
          <a-typography-title :level="3">VUE SCAFF ADMIN</a-typography-title>
          <a-typography-text>FAST & CONFIGURABLE</a-typography-text>
        </vs-flex>
      </vs-flex-item>
      <vs-flex-item flex="6" class="login--board--wrapper">
        <vs-section>
          <template #header>
            <a-typography-title :level="4">WELCOME</a-typography-title>
          </template>

          <http :api="$api.mock" v-slot="{ data }" :immediate="false" :wait="false" :responseInterceptor="responseInterceptorHandle" ref="httpRefresh">
            <a-form class="login--board--content" :model="formic" :label-col="{ span: 6 }" autocomplete="off" @finish="submit">
              <a-form-item name="username" :rules="[{ required: true, message: 'Please input your username!' }]">
                <a-input v-model:value="formic.username" size="large" placeholder="Username">
                  <template #prefix>
                    <UserOutlined class="site-form-item-icon" />
                  </template>
                </a-input>
              </a-form-item>

              <a-form-item name="password" :rules="[{ required: true, message: 'Please input your password!' }]">
                <a-input-password v-model:value="formic.password" size="large" placeholder="Password">
                  <template #prefix>
                    <LockOutlined class="site-form-item-icon" />
                  </template>
                </a-input-password>
              </a-form-item>

              <a-form-item name="remember">
                <a-checkbox v-model:checked="formic.remember">Remember me</a-checkbox>
              </a-form-item>

              <a-form-item>
                <a-button class="login--submit" type="primary" size="large" html-type="submit">SIGN IN</a-button>
              </a-form-item>
            </a-form>
          </http>

          <vs-flex justify="between">
            <a-typography-text disabled>Username: admin</a-typography-text>
            <a-typography-text disabled>Password: 123456</a-typography-text>
          </vs-flex>
        </vs-section>
      </vs-flex-item>
    </vs-flex>
  </vs-flex>
</template>

<script>
export default {
  data() {
    return {
      formic: {
        username: '',
        password: '',
      },
    };
  },

  methods: {
    async submit() {
      const { username, password } = this.formic;

      if (username === 'admin' && password === '123456') {
        localStorage.setItem('token', 'vue-scaff');
        this.$router.replace({ path: '/' });
      }
    },

    responseInterceptorHandle(data) {},
  },
};
</script>
