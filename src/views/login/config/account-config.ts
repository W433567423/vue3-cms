//校验规则
export const rules = {
  name: [
    {
      required: true,
      message: '账号必填',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{4,14}$/,
      message: '用户名为7-14个字母或数字组成～',
      triger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '密码必填',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9*#]{7,14}$/,
      message: '密码为7-14个字母或数字或*#组成～',
      triger: 'blur'
    }
  ],
  num: [
    {
      required: true,
      message: '手机号不为空',
      trigger: 'blur'
    },
    {
      pattern: /^1(3[0-9]|5[0-3,5-9]|7[1-3,5-8]|8[0-9])\d{8}$/,
      message: '手机号不合法',
      trigger: 'blur'
    }
  ],
  code: [
    {
      required: true,
      message: '验证码不为空',
      trigger: 'blur'
    }
  ]
}
