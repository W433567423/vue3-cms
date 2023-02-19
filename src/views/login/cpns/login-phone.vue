<template>
  <div class="login-account">
    <el-form label-width="80px" :rules="rules" :model="phone" ref="formRef">
      <el-form-item label="手机号" prop="num">
        <el-input v-model="phone.num" type="text" />
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <div class="get-code">
          <el-input v-model="phone.code" type="text" />
          <el-button type="primary" class="get-btn">发送</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex'
import { reactive, ref, defineExpose } from 'vue'
import { ElForm } from 'element-plus'
import { rules } from '../config/account-config'

const store = useStore()
//账户信息
const phone = reactive({
  num: '',
  code: ''
})

const formRef = ref<InstanceType<typeof ElForm>>()
const loginAction = () => {
  formRef.value?.validate((valid) => {
    if (valid) {
      store.dispatch('login/phoneLoginAction', { ...phone })
    }
  })
}
defineExpose({
  loginAction
})
</script>

<style scoped lang="less">
.get-code {
  display: flex;
  .get-btn {
    margin-left: 10px;
  }
}
</style>
