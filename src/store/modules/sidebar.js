// 侧边栏
import {defineStore} from 'pinia'

export const useSidebarStore = defineStore('sidebar', {
    state: () => ({
        active: '',
    }),
    getters: {
        // 获取当前激活的菜单
        getActiveName() {
            return this.active;
        },
    },
    actions: {
        // 设置当前激活的菜单
        setActiveName(name) {
            this.active = name;
        },
    },
})
