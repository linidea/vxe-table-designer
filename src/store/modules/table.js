// 表格数据
import _ from 'lodash';
import {defineStore} from "pinia";
import TableData from "@config/table/data.js";

let table = _.cloneDeep(TableData);

export const useTableStore = defineStore('table', {
    state: () => ({
        tableData: table,
    }),
    getters: {
        // 获取表格数据
        getTableData() {
            return this.tableData;
        },
    },
    actions: {
        // 设置表格数据
        setTableData(data) {
            this.tableData = data;
        }
    },
});
