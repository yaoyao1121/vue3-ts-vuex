<template>
  <div class="item-wrap">
    <div>
      <el-checkbox
        v-model="props.item.done"
        size="large"
        style="margin-right: 10px"
      ></el-checkbox>
      <span>{{ props.item.title }}</span>
    </div>
    <el-button type="danger" size="small" @click="handleDelete(props.item.id)"
      >删除</el-button
    >
  </div>
</template>
<script lang="ts" setup>
const props = defineProps({
  item: {
    type: Object,
    required: true,
    default: () => null,
  },
});
const emits = defineEmits(["handleDelete"]);
function handleDelete(id: string | number | null) {
  emits("handleDelete", id);
}
</script>

<style lang="scss" scoped>
.item-wrap {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  padding: 0 10px;
  &:last-of-type {
    border: none;
  }
}
</style>
