//
import {createApp} from 'vue';
import App from './App.vue';
import './style.css';
//
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
//
import VxeTable from "vxe-table";
import "vxe-table/lib/style.css";
//
const app = createApp(App);
app.use(ElementPlus);
app.use(VxeTable);
app.mount('#app')
