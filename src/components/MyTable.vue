<template>
  <table class="table table-bordered table-stripped">
    <!-- 表格标题区域 -->
    <thead>
      <tr>
        <!-- <th>#</th>
        <th>商品名称</th>
        <th>价格</th>
        <th>标签</th>
        <th>操作</th> -->
        <slot name="head"></slot>
      </tr>
    </thead>
    <!-- 表格主体区域 -->
    <tbody>
      <tr v-for="item in arr" :key="item.id">
        <!-- <td>{{ index + 1 }}</td>
        <td>{{ item.goods_name }}</td>
        <td>{{ item.goods_price }}</td>
        <td>{{ item.tags }}</td>
        <td><button class="btn btn-danger btn-sm">删除</button></td> -->
        <slot name="body" :row="item"></slot>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    arr: Array,
  },
  name: "MyTable",
};
</script>

<style scoped lang="less">
.my-goods-list {
  .badge {
    margin-right: 5px;
  }
}
</style>
