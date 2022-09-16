<!-- eslint-disable vue/require-prop-type-constructor -->
<template>
  <div class="my-tab-bar">
    <div
      class="tab-item"
      v-for="(item, index) in arr"
      :key="index"
      @click="changeTab(index, item.componentName)"
      :class="{ current: index === targetIndex }"
    >
      <!-- 图标 -->
      <span class="iconfont" :class="item.iconText"></span>
      <!-- 文字 -->
      <span>{{ item.text }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    arr: {
      type: Array,
      required: true,
      validator(value) {
        if (value.length < 2 || value.length > 5) {
          console.error("校验失败");
          return false;
        }
        return true;
      },
    },
    // eslint-disable-next-line vue/require-prop-type-constructor
  },
  data() {
    return {
      targetIndex: 0,
    };
  },
  methods: {
    changeTab(index, cName) {
      this.targetIndex = index;
      this.$emit("changeCom", cName);
    },
  },
};
</script>

<style lang="less" scoped>
.my-tab-bar {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  .tab-item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

.current {
  color: #1d7bff;
}
</style>
