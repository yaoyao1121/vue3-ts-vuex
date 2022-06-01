import store from "/@/store"
import { nanoid } from 'nanoid';
// import type { userItem } from '/@/store/types';
interface userItem {
    id: string | number;
    name: string;
}
import { VuexModule, Module, getModule, Mutation, Action } from "vuex-module-decorators"

@Module({
    name: "user",
    dynamic: true,
    namespaced: true,
    store,
})
export default class UserApp extends VuexModule {
    public userList: Array<userItem> = [{ id: nanoid(), name: "板栗" }];

    @Action
    addUserItem(value: userItem): void {
        this.userList.unshift(value)
    }
}

export const userStore = getModule<UserApp>(UserApp);
