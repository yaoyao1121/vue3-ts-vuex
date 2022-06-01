<template>
  <div class="footer-wrap">
    <span>
      <el-checkbox
        v-model="checkedAll"
        label=""
        size="large"
        style="margin-right: 6px"
        @change="handleChangeChecked"
      />
      <span>已完成{{ checkedNum }}/全部{{ todoList.length }} </span>
    </span>
    <el-button type="danger" size="small" @click="handleClearChecked"
      >清除已完成任务</el-button
    >
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, watch, PropType } from "vue";
interface doListItem {
  id: string | number | null;
  title: string | null;
  done: boolean;
}
export default defineComponent({
  props: {
    todoList: {
      type: Array as PropType<doListItem[]>,
      default: () => [],
    },
  },
  emits: ["handleIsCheckedAll", "handleClearChecked"],
  setup(props, { emit }) {
    let data = reactive({
      checkedAll: false,
      checkedNum: props.todoList.filter((item) => item.done).length,
    });
    function handleChangeChecked(val: boolean) {
      emit("handleIsCheckedAll", val);
    }
    function handleClearChecked() {
      data.checkedAll = false;
      data.checkedNum = 0;
      emit("handleClearChecked");
    }
    watch(
      props.todoList,
      (newValue, oldValue) => {
        console.log(newValue, "====监听数据以改变", oldValue);
        data.checkedNum = newValue.filter((item:doListItem) => item.done).length;
        if (newValue.length && data.checkedNum === newValue.length) {
          data.checkedAll = true;
        } else {
          data.checkedAll = false;
        }
      },
      { deep: true }
    );
    return {
      ...toRefs(data),
      handleChangeChecked,
      handleClearChecked,
    };
  },
});
</script>

<style lang="scss" scoped>
.footer-wrap {
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
