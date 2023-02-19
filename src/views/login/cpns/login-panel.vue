<template>
  <div class="login-panel">
    <h1 class="title">CMS后台管理</h1>

    <el-tabs type="border-card" stretch class="tabs" v-model="currentTab">
      <el-tab-pane name="account">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><User /></el-icon>
            <span>账号登陆</span>
          </span>
        </template>
        <login-account ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><Cellphone /></el-icon>
            <span>手机号登陆</span>
          </span>
        </template>
        <login-phone ref="phoneRef" />
      </el-tab-pane>
    </el-tabs>

    <div class="account-control">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>

    <el-button type="primary" class="login-btn" @click="handleLoginClick"
      >登录
    </el-button>
  </div>
</template>

<script setup lang="ts">
import { ElButton } from 'element-plus'
import { ref } from 'vue'
import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'

const isKeepPassword = ref(true)
const accountRef = ref<InstanceType<typeof LoginAccount>>()
const phoneRef = ref<InstanceType<typeof LoginPhone>>()
const currentTab = ref('account')

const handleLoginClick = () => {
  if (currentTab.value == 'account')
    accountRef.value?.loginAction(isKeepPassword.value)
  else phoneRef.value?.loginAction()
}
</script>

<style scoped lang="less">
.login-panel {
  margin-top: -150px;
  width: 320px;
  .title {
    text-align: center;
  }
  .tabs {
    // box-shadow: -1px 1px 1px grey;
    border: 2px solid rgba(128, 128, 128, 0.3);
  }
  .account-control {
    margin-top: 10px;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
  }
  .login-btn {
    width: 100%;
    margin-top: 10px;
  }
}
</style>
