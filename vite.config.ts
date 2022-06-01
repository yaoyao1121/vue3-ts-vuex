import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import {resolve} from "path";
function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir);
}
import px2rem from "postcss-px2rem";
const postcss = px2rem({
  remUnit: 16
})
// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  //根目录
  const root = process.cwd();
  // 根据当前工作目录中的 `mode` 加载 .env 文件
  // 设置第三个参数为 '' 来加载所有环境变量，而不管是否有 `VITE_` 前缀。
  const env = loadEnv(mode, root);
  return {
    // 项目根目录
    root,
    resolve: {
      alias: [
        //配置别名
        // /@/xxxx => src/xxxx
        {
          find: /\/@\//,
          replacement: pathResolve('src') + '/',
        },
        // /#/xxxx => types/xxxx
        {
          find: /\/#\//,
          replacement: pathResolve('types') + '/',
        },
      ]
    },
    server: {
      host: '0.0.0.0', //通过ip形式访问
      port: 3000, //端口号
      open: true, //自动打开浏览器
    },
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: `@import "@/assets/styles/index.scss";`
        }
      },
      postcss: {
        plugins:[postcss]
      }
    },
    // 插件扩展
    plugins: [vue()],
  };
});
