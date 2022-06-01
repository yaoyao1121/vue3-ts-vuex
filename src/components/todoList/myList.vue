<template>
  <div class="list-wrap">
    <template v-for="item in todoList" :key="item.id">
        <MyItem :item="item" @handleDelete="handleDelete"></MyItem>
    </template>
  </div>
</template>
<script lang="ts">
import { defineComponent,reactive,toRefs,PropType } from "vue";
import MyItem from "./myListItem.vue";
interface doListItem {
  id: string | number | null;
  title: string | null;
  done: boolean;
}
export default defineComponent({
  components: { MyItem },
  emits:["handleDelete"],
  props: {
    todoList: {
      type: Array as PropType<doListItem[]>,
      default: () => [],
    },
  },
  setup(props, { emit }) {
    // let data = reactive<any>({
    //     ...props
    // })
    function handleDelete(id:string | number | null) {
        emit("handleDelete",id)
    }
    return {
        // ...toRefs(data),
        handleDelete
    }
  },
});
</script>

<style lang="scss">
.list-wrap {
    box-sizing: border-box;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
}
</style>
