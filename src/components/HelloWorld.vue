<template>
  <p>Hello Word</p>
  <p>姓：<input type="text" v-model="userInfo.fistName"></p>
  <p>名：<input type="text" v-model="userInfo.lastName"></p>
  <p>userInfo.name：{{userInfo.name}}</p>
</template>
<script lang="ts">
interface userInfoType{
  name: String;
  age: Number;
  fistName: String;
  lastName: String;
  job: Object;
}
import { defineComponent,reactive,computed } from 'vue'
export default defineComponent({
  setup() {
    let userInfo = reactive<any>({
      name: '',
      age: 20,
      fistName: "张",
      lastName: "三",
      job: {
        salaly: "20k"
      }
    });
    console.log(userInfo.name)
    // userInfo.name = `${userInfo.fistName}${userInfo.lastName}`
    userInfo.name = computed(()=> userInfo.fistName + userInfo.lastName);
    return {
      userInfo
    }
  },
})
</script>


<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
