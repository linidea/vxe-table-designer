//
import './style.css';
//
import {createApp} from 'vue';
import App from './App.vue';
//
import _ from 'lodash';
import {Pinia} from '@store';
//
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
//
import VxeTable from "vxe-table";
import "vxe-table/lib/style.css";
//
const app = createApp(App);
app.config.globalProperties.$lodash = _;
//
app.use(Pinia);
app.use(ElementPlus);
app.use(VxeTable);
//
app.mount('#app')
