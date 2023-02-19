<template>
  <div class="login-account">
    <el-form label-width="80px" :rules="rules" :model="account" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" type="text" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, defineExpose } from 'vue'
import { useStore } from 'vuex'
import { ElForm } from 'element-plus'
import { rules } from '../config/account-config'
import localcache from '@/utils/cache'

const store = useStore()

//账户信息
const account = reactive({
  name: localcache.getCache('name') ?? '',
  password: localcache.getCache('password') ?? ''
})

const formRef = ref<InstanceType<typeof ElForm>>()
const loginAction = (isKeepPassword: boolean) => {
  formRef.value?.validate((valid) => {
    if (valid) {
      if (isKeepPassword) {
        localcache.setCache('name', account.name)
        localcache.setCache('password', account.password)
      } else {
        localcache.deleteCache('name')
        localcache.deleteCache('password')
      }

      store.dispatch('login/accountLoginAction', { ...account })
    }
  })
}
defineExpose({
  loginAction
})
</script>

<style scoped lang="less"></style>
