<template>
  <el-scrollbar>
    <el-menu
      router
      activite-text-color="#409eff"
      background-color="#545c64"
      text-color="#fff"
    >
      <template v-for="item in menuList">
        <template v-if="item.children && item.children.length">
          <el-sub-menu :index="item.path" :key="item.path">
            <!-- <template #icon></template> -->
            <template #title>{{ item.mate.title }}</template>
            <template v-for="subItem in item.children">
              <template v-if="subItem.children && subItem.children.length">
                <el-sub-menu :index="subItem.mate.title" :key="subItem.path">
                  <template #title>{{ subItem.mate.title }}</template>
                  <template
                    v-for="(subItem2, index2) in subItem.children"
                    :key="index2"
                  >
                    <el-menu-item :index="subItem2.path">{{
                      subItem2.mate.title
                    }}</el-menu-item>
                  </template>
                </el-sub-menu>
              </template>
              <template v-else>
                <el-menu-item :index="subItem.path" :key="subItem.path">{{
                  subItem.mate.title
                }}</el-menu-item>
              </template>
            </template>
            <!-- <el-menu-item :index=""></el-menu-item> -->
          </el-sub-menu>
        </template>

        <template v-else>
          <el-menu-item :index="item.path" :key="item.path">{{
            item.mate.title
          }}</el-menu-item>
        </template>
      </template>
    </el-menu>
  </el-scrollbar>
</template>

<script lang="ts">
const memuListOld = [
  {
    path: "/",
    mate: { title: "首页", icon: "icon-shebei" },
  },
  {
    path: "/todoList",
    mate: { title: "基础学习", icon: "icon-renyuan" },
    menuId: 1,
    children: [
      {
        path: "/todoList",
        mate: { title: "任务列表", icon: "icon-jurassic_user" },
        children: [],
      },
      {
        path: "/helloWord",
        mate: { title: "组件传值", icon: "icon-jiaose" },
        children: [
          {
            path: "/helloWord",
            mate: { title: "组件传值", icon: "icon-jiaose" },
          },
        ],
      },
      {
        path: "/vuex",
        mate: {title:"vuex共享数据",icon:"icon-renyuan"}
      }
    ],
  },
];
// let memuListOld = [
//   {
//     name: "首页",
//     path: "/",
//   },
// ];
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    let menuList = ref(memuListOld);
    return {
      menuList,
    };
  },
});
</script>

<style></style>
