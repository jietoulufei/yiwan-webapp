<template>
  <div class="layoutContainer">
    <AppHeader></AppHeader>
    <router-view class="AppMain"></router-view>
    <AppFooter></AppFooter>
  </div>
</template>

<script>
import AppFooter from "./AppFooter";
import AppHeader from "./AppHeader";
export default {
  data() {
    return {};
  },

  components: { AppHeader, AppFooter },

  methods: {},
};
</script>

<style scoped lang="less">
.layoutContainer {
  background: #ebf0f4;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  .AppMain {
    position: absolute;
    top: 199px;
    left: 0;
    right: 0;
    bottom: 62px;
  }
}
</style>
