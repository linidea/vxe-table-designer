//
import {createPinia} from 'pinia'
// 侧边栏
import {useSidebarStore} from './modules/sidebar'
//
const Pinia = createPinia()
export {
    Pinia,
    useSidebarStore,
}
