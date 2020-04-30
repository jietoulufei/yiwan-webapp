<template>
  <div class="passwordLoginBox">
    <h1>账号注册</h1>
    <div class="inputs">
      <cube-input
        ref="initFocus"
        v-model="username"
        placeholder="请输入用户名"
        :clearable="clearUsername"
        :maxlength="18"
      >
      </cube-input>
    </div>
    <div class="inputs">
      <cube-input
        v-model="pwd"
        placeholder="请输入密码"
        :type="type"
        :eye="eye"
        :clearable="clearPassword"
        :maxlength="18"
      >
      </cube-input>
    </div>
    <cube-button @click="submit" :disabled="!isValidate">登录</cube-button>
    <div class="mainText">
      <span>验证码登录</span>
      <span>忘记密码?</span>
    </div>
    <div class="footerText" v-show="isShow">
      <div class="imgDiv">
        <img
          src="https://ae01.alicdn.com/kf/Hfce100ca995c4aaea43ae0d6bb3e1298T.png"
          alt
        />
      </div>
      <span>登录即代表你已同意《平台用户协议》及《隐私协议》</span>
    </div>
  </div>
</template>

<script>
import { listenWindowSize } from "@/utils/common";
export default {
  data() {
    return {
      username: "",
      clearUsername: {
        visible: true,
        blurHidden: true
      },
      pwd: "",
      type: "password",
      eye: {
        open: true,
        reverse: false
      },
      clearPassword: {
        visible: true,
        blurHidden: true
      },
      usernameValidate: false,
      pwdValidate: false,
      docmHeightInit: document.documentElement.clientHeight, //浏览器屏幕初始高度
      isShow: true
    };
  },

  components: {},

  methods: {
    submit() {
      if (this.isValidate) {
        console.log("ok");
      }
    }
  },
  computed: {
    isValidate() {
      //校验规则
      return this.usernameValidate && this.pwdValidate;
    }
  },
  watch: {
    username(newV) {
      //控制输入长度
      if (newV.length > 4) {
        this.usernameValidate = true;
      } else {
        this.usernameValidate = false;
      }
    },
    pwd(newV) {
      //控制输入长度
      if (newV.length > 4) {
        this.pwdValidate = true;
      } else {
        this.pwdValidate = false;
      }
    }
  },
  mounted() {
    //初始化获取焦点
    //this.$refs.initFocus.focus();
    //当使用非PC端浏览器时候 监听屏幕高度
    listenWindowSize(this, this.isShow, this.docmHeightInit);
  }
};
</script>

<style scoped lang="less">
.commonstyle() {
  font-size: 12px;
  color: grey;
}

// 校验失败input的样式
.cube-validator_warn {
  input {
    border: solid 1px yellow;
  }
}

.passwordLoginBox {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  padding: 80px 30px 30px;
  background-image: linear-gradient(to right, #fffeff, #7de2fc);

  h1 {
    padding-bottom: 40px;
  }

  .inputs {
    padding-bottom: 20px;
  }

  button {
    margin-top: 5px;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .mainText {
    padding-top: 15px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .commonstyle();
  }

  .footerText {
    flex: 1;
    .commonstyle();
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    text-align: center;
    .imgDiv {
      padding-bottom: 20px;
      img {
        width: 50px;
      }
    }
  }
}
</style>
