<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue';
import RapportInput from '@/parts/RapportInput.vue'
import RapportButton from '@/parts/RapportButton.vue'

type LoginInfo = {
  [id: string]: string,
  password: string,
}

const loginInfo: Ref<LoginInfo> = ref({
  id: '',
  password: ''
});

const changeLoginInfo = (type: string, val: string) => {
  loginInfo.value[type] = val;
}

const clickLogin = () => {
  // FIXME: vue router で実現する
  location.href = './'
}
</script>

<template lang="pug">
main
  .login-page
    .login-container
      h1 ログイン画面
      .login-form-group
        .login-form
          span.login-label ID
          rapport-input(
            type="text"
            :val="loginInfo.id"
            @change="(val) => changeLoginInfo('id', val)"
          )
        .login-form
          span.login-label パスワード
          rapport-input(
            type="password"
            :val="loginInfo.password"
            @change="(val) => changeLoginInfo('password', val)"
          )
      .certification-button-wrapper
        rapport-button(
          appearance="primary"
          @on-click="clickLogin"
        )
          | ログイン
        rapport-button(appearance="secondary")
          | 新規登録
</template>

<style scoped>
.login-page {
  padding: 1vw;
}

.login-page h1 {
  text-align: center;
}

.login-container {
  margin: auto;
  width: 50vw;
}

.login-form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5vw;
  padding: 3vw;
}

.login-form {
  display: flex;
  margin: auto;
}

.login-label {
  display: inline-block;
  margin-right: 0.75vw;
  text-align: right;
  width: 6vw;
}

.certification-button-wrapper {
  display: flex;
  gap: 1vw;
  justify-content: center;
}
</style>
