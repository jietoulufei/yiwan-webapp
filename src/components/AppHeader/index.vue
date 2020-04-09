<template>
  <div>
    <cube-slide ref="slide" :data="items" @change="changePage">
      <cube-slide-item
        v-for="(item, index) in items"
        :key="index"
        @click.native="clickHandler(item, index)"
      >
        <div
          :style="{ backgroundImage: `url(${item.uri})` }"
          class="bglist"
        ></div>
      </cube-slide-item>
    </cube-slide>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          name: "one",
          uri:
            "https://ae01.alicdn.com/kf/Hb1289bf5edb84d7e842659916f03aeaei.jpg",
        },
        {
          name: "two",
          uri:
            "https://ae01.alicdn.com/kf/H2772550cf1594fea8bfc31e100f21ee1S.jpg",
        },
        {
          name: "three",
          uri:
            "https://ae01.alicdn.com/kf/H16a20b0684f64483a73dfba19e0ea08aQ.jpg",
        },
        {
          name: "four",
          uri:
            "https://ae01.alicdn.com/kf/He51dddcdca074781a4958a95280edfadn.jpg",
        },
      ],
    };
  },

  components: {},

  methods: {
    changePage(current) {
      console.log("当前轮播图序号为:" + current);
    },
    clickHandler(item, index) {
      console.log(item, index);
    },
  },
};
</script>

<style scoped lang="less">
// 轮播图样式
.bglist {
  height: 180px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
}
</style>
