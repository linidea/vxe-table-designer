//
import './style.css';
//
import {createApp} from 'vue';
import App from './App.vue';
//
import {Pinia} from '@store';
//
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
//
import VxeTable from "vxe-table";
import "vxe-table/lib/style.css";
//
const app = createApp(App);
//
app.use(Pinia);
app.use(ElementPlus);
app.use(VxeTable);
//
app.mount('#app')
