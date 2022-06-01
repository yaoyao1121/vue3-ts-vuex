<template>
  <div class="app-container">
    <!-- 页面主体区域 -->
    <el-container>
      <el-aside width="200px" height="100vh">
        <!-- 侧边栏区域 -->
        <subMenu></subMenu>
      </el-aside>
      <!-- 右边Main区域 -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import subMenu from "./subMenu.vue";
export default defineComponent({
  components: { subMenu },
  setup() {},
});
</script>
<style lang="scss" scoped>
.app-container {
  min-height: 100vh;
  :deep(.el-aside) {
    height: 100vh;
    background-color: #545c64;
  }
}
</style>
