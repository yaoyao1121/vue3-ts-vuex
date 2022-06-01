import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Index",
      component: () => import("/@/view/index.vue"),
      meta: {
        title: "首页",
      },
    },
    {
      path: "/helloWord",
      name: "HelloWord",
      component: () => import("/@/components/HelloWorld.vue"),
      meta: {
        title: "首页",
      },
    },
    {
      path: "/todoList",
      name: "TodoList",
      component: () => import("/@/view/todoList.vue"),
      meta: {
        title: "任务列表",
      },
    },
    {
      path: "/vuex",
      name: "VuexData",
      component: () => import("/@/view/vuexData/sharedData.vue"),
      meta: {
        title: "vuex共享数据"
      }
    }
  ],
});
export default router;
