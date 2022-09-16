<template>
  <div>
    <MyTable :arr="list">
      <template #head>
        <th>#</th>
        <th>商品名称</th>
        <th>价格</th>
        <th>标签</th>
        <th>操作</th>
      </template>
      <template #body="{ row }">
        <td>{{ row.id }}</td>
        <td>{{ row.goods_name }}</td>
        <td>{{ row.goods_price }}</td>
        <td>
          <input
            class="tag-input form-control"
            style="width: 100px"
            type="text"
            v-if="row.inputVisible"
            v-focus
            @blur="row.inputVisible = false"
            v-model="row.inputValue"
            @keydown.esc="row.inputValue = ''"
            @keydown.enter="enterFn(row)"
          />
          <button
            v-else
            style="display: block"
            class="btn btn-primary btn-sm add-tag"
            @click="row.inputVisible = true"
          >
            +Tag
          </button>
          <span
            v-for="(str, index) in row.tags"
            :key="index"
            class="badge badge-warning"
          >
            {{ str }}
          </span>
        </td>

        <td>
          <button class="btn btn-danger btn-sm" @click="del(row.id)">
            删除
          </button>
        </td>
      </template>
    </MyTable>
  </div>
</template>

<script>
import MyTable from "./MyTable";
export default {
  directives: {
    focus: {
      inserted(el) {
        el.focus();
      },
    },
  },
  components: {
    MyTable,
  },
  data() {
    return {
      list: [], // 所有数据
    };
  },
  created() {
    this.$axios({
      url: "/api/goods",
    }).then((res) => {
      console.log(res);
      this.list = res.data.data;
    });
  },
  methods: {
    del(id) {
      this.list = this.list.filter((item) => item.id !== id);
    },
    enterFn(row) {
      if (row.inputValue.trim() === "") {
        return alert("请输入");
      }
      row.tags.push(row.inputValue);
      row.inputValue = "";
    },
  },
};
</script>
