<template>
    <el-row>
    <el-col :span="14" :offset="5">
      <h1>vuex共享组件数据</h1>
    </el-col>
  </el-row>
  <countSum/>
  <userList/>
</template>
<script lang="ts" setup>
import countSum from "./countSum.vue"
import userList from "./userList.vue"
// import count from "./count.vue"
</script>
<style lang="scss" scoped>
h1 {
  font-weight: bold;
  margin:  10px 0;
  font-size: 24px;
  text-align: center;
}
</style>
