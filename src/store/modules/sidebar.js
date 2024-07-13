// 侧边栏
import {defineStore} from 'pinia'

export const useSidebarStore = defineStore('sidebar', {
    state: () => ({
        sidebarName: 'tableBase',
    }),
    getters: {
        // 获取当前激活的菜单
        mySidebarName(state) {
            return state.sidebarName;
        },
    },
    actions: {
        // 设置当前激活的菜单
        setSidebarName(name) {
            this.sidebarName = name;
        },
    },
})
