// 侧边栏
import {defineStore} from 'pinia'

export const useSidebarStore = defineStore('sidebar', {
    state: () => ({
        active: '',
    }),
    actions: {
        setActiveName(name) {
            this.active = name;
        },
    },
    getters: {
        activeName() {
            return this.active;
        },
    },
})
