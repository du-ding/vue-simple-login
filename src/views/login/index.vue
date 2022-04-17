<template>
  <div class="main">
    <div class="login">
      <div class="left">
        <img src="@/assets/Meeting.svg" />
      </div>
      <div class="right">
        <div style="
            text-align: center;
            font-size: 40px;
            color: #0089ff;
            margin-top: 70px;
          ">vue-simple-login</div>
        <div class="loginMain">
          <a-form-model :model="form"
                        layout="horizontal"
                        ref="ruleForm"
                        :rules="rules">
            <a-form-model-item prop="user">
              <a-input v-model="form.user"
                       placeholder="请输入用户名">
                <a-icon slot="prefix"
                        type="user" />
              </a-input>
            </a-form-model-item>
            <a-form-model-item prop="password">
              <a-input v-model="form.password"
                       placeholder="请输入密码"
                       type="password">
                <a-icon slot="prefix"
                        type="lock" />
              </a-input>
            </a-form-model-item>
            <span v-if='errorLoginFlag'
                  class='errorLogin'>用户名或密码错误</span>
            <a-form-model-item>
              <a-button type="primary"
                        @click="onSubmit">登陆</a-button>
              <a-button @click="reset">重置</a-button>
            </a-form-model-item>
          </a-form-model>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as _ from 'lodash'
import { loginApi } from '@/api/login.js'
export default {
  created () {
    window.addEventListener('keydown', this.keyDown)
  },
  data () {
    return {
      form: {
        user: '',
        password: ''
      },
      rules: {
        user: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
        ]
      },
      errorLoginFlag: false,
    };
  },
  methods: {
    onSubmit () {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          console.log(this.form)
          loginApi({ userName: this.form.user, password: this.form.password }).then((res) => {
            if (res.code === 200) {
              sessionStorage.setItem('user', JSON.stringify(res))
              this.$store.dispatch('setUser', res)
              const query = this.removeDedirect(this.$route.query) //返回去掉redirect的query
              const params = this.removeDedirect(this.$route.params) //params
              //如果有重定向的页面，则登陆后跳转到重定向到要去的页面，如果没有则跳转到首页
              this.$router.push({
                path: this.$route.query.redirect ? this.$route.query.redirect : '/home',
                query,
                params
              })
            } else {
              this.errorLoginFlag = true
              this.$message.error('用户名或密码错误')
            }
          })

        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    reset () {
      this.form = {
        user: '',
        password: ''
      }
    },
    //去掉路由query里的redirect
    removeDedirect (query) {
      const result = _.cloneDeep(query)
      delete result.redirect;
      return result
    },
    //回车登录
    keyDown (e) {
      // 如果是回车则执行登录方法
      if (e.keyCode === 13) {
        this.onSubmit()
      }
    }
  },
  destroyed () {
    window.removeEventListener('keydown', this.keyDown)
  }
}
</script>

<style scoped>
.main {
  width: 100%;
  height: 100%;
  background-image: url("../../assets/loginBackground.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
}
.login {
  width: 1300px;
  height: 700px;
  background-color: rgb(15 32 62);
  position: absolute;
  display: flex;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  box-shadow: 10px 10px 10px #33486e;
  border-radius: 40px;
}
img {
  width: 500px;
  margin-left: 100px;
  margin-top: 350px;
  transform: translateY(-50%);
}
.right {
  flex: 1;
}
.loginMain {
  width: 600px;
  height: 400px;
  padding-top: 40px;
  margin-top: 30px;
}
.ant-form {
  width: 300px;
  margin: 0 auto;
  margin-top: 50px;
}

.ant-btn {
  width: 400px;
}
.ant-btn-primary {
  background-color: rgb(0, 137, 255);
}
/deep/ .ant-input-affix-wrapper .ant-input {
  height: 50px;
}
.ant-input-affix-wrapper {
  width: 400px;
}
.errorLogin {
  color: red;
  margin-left: 50%;
  animation: colorChange 0.8s infinite;
  animation-direction: alternate;
}
@keyframes colorChange {
  from {
    color: red;
  }
  to {
    color: rgb(15 32 62);
  }
}
</style>