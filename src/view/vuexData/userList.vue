<template>
  <el-row>
    <el-col :span="14" :offset="5">
      <h1>用户列表</h1>
      <div class="listWrap">
        <h2 style="color: red">求和组件和为：{{countStore.sum}}</h2>
        <hr />
        <div style="display: flex">
          <el-input
            v-model="inputValue"
            placeholder="请输入用户昵称"
          ></el-input>
          <el-button type="primary" @click="handleAddUser">添加</el-button>
        </div>
        <hr />
        <ul>
          <li v-for="item in userList" :key="item.id">{{ item.name }}</li>
        </ul>
      </div>
    </el-col>
  </el-row>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { nanoid } from "nanoid";
import { userStore } from "/@/store/modules/user";
import { countStore } from "/@/store/modules/count";

let inputValue = ref("");
let userList = ref(userStore.userList);
function handleAddUser() {
  userStore.addUserItem({ id: nanoid(), name: inputValue.value });
  inputValue.value = ""
}
</script>
<style lang="scss" scoped>
h1 {
  font-weight: bold;
  margin: 20px 0;
  font-size: 24px;
  text-align: center;
}
.listWrap {
  box-sizing: border-box;
  padding: 40px;
  border: #ccc solid 1px;
  text-align: left;
}
</style>
