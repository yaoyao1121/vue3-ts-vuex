<template>
  <el-input
    v-model="inputValue"
    placeholder="请输入你的任务名称，按回车确认"
    @change.enter="handleAdd"
  ></el-input>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { nanoid } from "nanoid";
export default defineComponent({
  emits: ["getToDoList"],
  setup(props, { emit }) {
    let inputValue = ref<String>("");
    function handleAdd(value: any) {
      let todoObj = {
        id: nanoid(),
        title: value,
        done: false,
      };
      emit("getToDoList", todoObj);
      inputValue.value = ""
    }
    return {
      inputValue,
      handleAdd,
    };
  },
});
</script>

<style></style>
