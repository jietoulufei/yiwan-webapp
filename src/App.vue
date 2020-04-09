<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  created: function() {
    //当vue实例创建时，去除首屏loading
    document.body.removeChild(document.getElementById("loader-wrapper"));
  }
};
</script>

<style lang="less">
body {
  font-family: "微软雅黑";
  margin: 0 auto;
}
</style>
