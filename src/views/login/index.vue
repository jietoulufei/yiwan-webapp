<template>
  <div id="flexDiv">
    <div class="flex-container">
      <div class="imgDiv">
        <img src="https://ae01.alicdn.com/kf/Hfce100ca995c4aaea43ae0d6bb3e1298T.png" alt />
        <h1 class="LoginTit">壹萬小時</h1>
      </div>
      <div class="buttonsDiv">
        <cube-button>手机号登录</cube-button>
        <cube-button :outline="true">密码登录</cube-button>
      </div>
      <div class="footerDiv">
        <p>其他登录方式</p>
        <div class="iconsDiv">
          <span>
            <img src="https://ae01.alicdn.com/kf/H4a57e82ed636428c8ac407ee17224cbdi.png" alt />
          </span>
          <span>
            <img src="https://ae01.alicdn.com/kf/H99a7712880594c36a2e086f77eba03cdY.png" alt />
          </span>
          <span>
            <img src="https://ae01.alicdn.com/kf/H3498ae724fa648b8af4b70d7299c6810O.png" alt />
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

  methods: {},
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

    .footerDiv {
      font-size: 15px;
      color: grey;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 30px;
      p {
        padding: 20px 0;
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
        font-size: 12px;
        padding-top: 15px;
      }
    }
  }
}
</style>
