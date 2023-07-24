// rule:即为校验规则对象
// value:即为表单元素文本内容
// 函数:如果符合条件callBack放行通过即为
// 如果不符合条件callBack方法,注入错误提示信息
export const validatorUsername = (rule: any, value: any, callback: any) => {
  if (value.length >= 5) {
    callback()
  } else {
    callback(new Error('账号长度至少五位'))
  }
}

export const validatorPassword = (rule: any, value: any, callback: any) => {
  if (value.length >= 6) {
    callback()
  } else {
    callback(new Error('密码长度至少六位'))
  }
}
