<template>
  <el-row>
    <el-col :span="14" :offset="7">
      <h1>TODO-LIST</h1>
      <div class="form-wrap">
        <my-header @getToDoList="getToDoList"></my-header>
        <my-list :todoList="todoList" @handleDelete="handleDelete"></my-list>
        <my-footer
          :todoList="todoList"
          @handleIsCheckedAll="handleIsCheckedAll"
          @handleClearChecked="handleClearChecked"
        ></my-footer>
      </div>
    </el-col>
  </el-row>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, ref } from "vue";
import MyHeader from "/@/components/todoList/myHeader.vue";
import MyList from "/@/components/todoList/myList.vue";
import MyFooter from "/@/components/todoList/myfooter.vue";
interface doListItem {
  id: string | number | null;
  title: string | null;
  done: boolean;
}
export default defineComponent({
  components: { MyHeader, MyList, MyFooter },
  setup() {
    let data = reactive<{
      todoList: Array<doListItem>;
    }>({
      todoList: [
        { id: 1, title: "吃饭", done: true },
        { id: 2, title: "睡觉", done: false },
        { id: 3, title: "打豆豆", done: false },
      ],
    });
    // 添加任务
    function getToDoList(todoObj: doListItem) {
      console.log("添加任务", todoObj);
      data.todoList.unshift(todoObj);
      console.log("添加任务end", data.todoList);
    }
    function handleIsCheckedAll(isChecked: boolean) {
      data.todoList.forEach((item) => (item.done = isChecked));
    }
    function handleClearChecked() {
      data.todoList = data.todoList.filter((item) => !item.done);
    }
    function handleDelete(id: string | number | null) {
      data.todoList.splice(
        data.todoList.findIndex((item) => item.id === id),
        1
      );
    }

    return {
      ...toRefs(data),
      handleIsCheckedAll,
      handleClearChecked,
      getToDoList,
      handleDelete,
    };
  },
});
</script>

<style lang="scss" scoped>
h1 {
  font-weight: bold;
  margin: 50px 0 20px 0;
  font-size: 24px;
  text-align: center;
}
.form-wrap {
  box-sizing: border-box;
  padding: 40px;
  border: #ccc solid 1px;
}
</style>
