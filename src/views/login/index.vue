<template>
  <div id="flexDiv">
    <div class="flex-container">
      <div class="imgDiv">
        <img
          src="https://ae01.alicdn.com/kf/Hfce100ca995c4aaea43ae0d6bb3e1298T.png"
          alt
        />
        <h1 class="LoginTit">壹萬小時</h1>
      </div>
      <div class="buttonsDiv">
        <cube-button>手机号登录</cube-button>
        <cube-button :outline="true" @click="passwordLG">密码登录</cube-button>
      </div>
      <div class="regiseterContext">
        <span>
          没有账号？
        </span>
        <span>
          <router-link to="/register">立即注册</router-link>
        </span>
      </div>
      <div class="footerDiv">
        <div class="other">
          <span class="line"></span>
          <span class="txt">其他登录方式</span>
          <span class="line"></span>
        </div>
        <div class="iconsDiv">
          <span>
            <img
              src="https://ae01.alicdn.com/kf/H4a57e82ed636428c8ac407ee17224cbdi.png"
              alt
            />
          </span>
          <span>
            <img
              src="https://ae01.alicdn.com/kf/H99a7712880594c36a2e086f77eba03cdY.png"
              alt
            />
          </span>
          <span>
            <img
              src="https://ae01.alicdn.com/kf/H3498ae724fa648b8af4b70d7299c6810O.png"
              alt
            />
          </span>
        </div>
        <div class="footerText">
          <span>登录即代表你已同意《平台用户协议》及《隐私协议》</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},

  methods: {
    passwordLG() {
      this.$router.push("/password");
    }
  },
  mounted() {
    //meta标签的user-scalable=0只能禁止双击缩放，所以此处需要禁止两手指缩放页面
    document.documentElement.addEventListener(
      "touchmove",
      function(event) {
        if (event.touches.length > 1) event.preventDefault();
      },
      false
    );
  }
};
</script>

<style lang="less">
@color: #409eff;
#flexDiv {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  .flex-container {
    display: flex;
    height: 100%;
    flex-direction: column;
    text-align: center;
    h1.LoginTit {
      font-size: 26px;
    }

    .imgDiv {
      padding: 20px 0;
      img {
        width: 100px;
      }
    }

    .buttonsDiv {
      padding: 40px 15px;
      button {
        margin-bottom: 15px;
      }
    }

    .regiseterContext {
      font-size: 14px;
      & span:nth-child(2) a {
        color: @color;
      }
    }

    .footerDiv {
      font-size: 12px;
      color: grey;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 30px;

      // 横线
      .other {
        height: 60px;
        line-height: 60px;
        text-align: center;
        .line {
          display: inline-block;
          width: 50px;
          border-top: 1px solid #ccc;
        }
        .txt {
          color: #686868;
          vertical-align: -5px;
          padding: 0 10px;
        }
      }

      .iconsDiv {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        //justify-content: space-evenly; 兼容性写法
        justify-content: space-between;
        &:before,
        &:after {
          content: "";
          display: block;
        }
        img {
          width: 32px;
        }
      }
      .footerText {
        font-size: 10px;
        padding-top: 10px;
      }
    }
  }
}
</style>
