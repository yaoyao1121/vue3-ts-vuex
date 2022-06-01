<template>
  <el-row>
    <el-col :span="14" :offset="5">
      <h1>{{ countName }}求和组件</h1>
      <div class="listWrap">
        <h2>当前求和为：{{countStore.sum}}</h2>
        <hr />
        <h2>当前求和数放大10倍为：{{countStore.bigSum}}</h2>
        <hr />
        <h2 style="color:red">用户列表总人数为：{{userStore.userList.length || 0}}</h2>
        <hr />
        <el-select v-model="num" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <div>
          <el-button size="small" type="primary" @click="handleIncrement">
            +
          </el-button>
          <el-button size="small" type="primary" @click="handleDecrement">
            -
          </el-button>
          <el-button size="small" type="primary" @click="handleIncrementOdd">
            当前求和为奇数再 +
          </el-button>
          <el-button size="small" type="primary" @click="handleIncrementWait">
            延时等一等再 +
          </el-button>
        </div>
      </div>
    </el-col>
  </el-row>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { countStore } from "/@/store/modules/count";
import { userStore } from "/@/store/modules/user";

let num = ref<number>(1);
let countName = countStore.name;
const options = [
  {
    label: 1,
    value: 1,
  },
  {
    label: 2,
    value: 2,
  },
  {
    label: 3,
    value: 3,
  },
];
function handleIncrement() {
  countStore.INCREMENT(num.value);
}
function handleDecrement() {
  countStore.DECREMENT(num.value);
}
function handleIncrementOdd() {
  countStore.incrementOdd(num.value);
}
function handleIncrementWait() {
  countStore.incrementWait(num.value);
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
