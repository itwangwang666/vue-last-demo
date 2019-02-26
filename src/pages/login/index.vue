<template>
  <div class="login-container">
    <van-nav-bar title="登录" fixed/>
    <van-cell-group>
      <van-field
        v-model="username"
        required
        clearable
        label="用户名"
        right-icon="question-o"
        placeholder="请输入用户名"
      />

      <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" required/>
    </van-cell-group>
  </div>
</template>
<script>
export default {
    data(){
        return {
            username:'',
            password:''
        }
    }
}
</script>