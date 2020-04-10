<template>
  <div class="barBox">
    <cube-tab-bar v-model="selectedLabelSlots" @click="clickHandler" @change="changeHandler">
      <cube-tab v-for="(item, index) in tabs" :label="item.label" :key="item.label">
        <!-- name为icon的插槽 -->
        <div class="labelIcon">
          <i slot="icon" :class="item.icon"></i>
        </div>
        <!-- 默认插槽 -->
        <div class="labelContext">
          <span>{{ item.label }}</span>
        </div>
      </cube-tab>
    </cube-tab-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedLabelSlots: "首页",
      tabs: [
        {
          label: "首页",
          icon: "cubeic-home"
        },
        {
          label: "编程",
          icon: "cubeic-vip"
        },
        {
          label: "编辑",
          icon: "cubeic-edit"
        },
        {
          label: "我的",
          icon: "cubeic-person"
        }
      ]
    };
  },

  components: {},

  methods: {
    clickHandler(label) {
      // if you clicked home tab, then print 'Home'
      console.log(label);
    },
    changeHandler(label) {
      // if you clicked different tab, this methods can be emitted
      console.log(label);
    }
  }
};
</script>

<style lang="less" scope>
.barBox {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #fff;
  .labelIcon {
    font-size: 26px;
  }
  .labelContext {
    font-size: 10px;
  }
}
</style>
