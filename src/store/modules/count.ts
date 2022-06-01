import store from "/@/store";

import {
  VuexModule,
  Module,
  getModule,
  Mutation,
  Action,
} from "vuex-module-decorators";
/**
 * dynamic:true,动态创建动态模块，即new Vuex.store({})，里面不用注册空着就可
 * store，当前模块注册到store上，也可以写在getModule上，即getModule(CountStore,store)
 * namespaced:true，name:count，命名空间
 */
@Module({
  name: "count",
  dynamic: true,
  namespaced: true,
  store,
})
export default class CountApp extends VuexModule {
  //state => 需要用public定义否则外面取不到
  public name: string = "双双";
  public sum: number = 0;
  //getter
  get bigSum(): number {
    return this.sum * 10;
  }

  @Mutation
  INCREMENT(value: number): void {
    this.sum += value;
  }

  @Mutation
  DECREMENT(value: number): void {
    this.sum -= value;
  }

  @Action
  incrementOdd(value: number): void {
    if (this.sum % 2) {
      this.context.commit("INCREMENT", value); // commit调用
      // this.INCREMENT(value); // 直接调用
    }
  }

  @Action
  incrementWait(value: number): void {
    setTimeout(() => {
      this.context.commit("INCREMENT", value);
    }, 1000);
  }
}
export const countStore = getModule<CountApp>(CountApp);

