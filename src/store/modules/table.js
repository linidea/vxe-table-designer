// 表格数据
import {defineStore} from "pinia";
import TableData from "@config/table/data.js";

export const useTableStore = defineStore('table', {
    state: () => ({
        tableData: TableData,
    }),
    getters: {
        // 获取表格数据
        myTableData(state) {
            return state.tableData;
        },
    },
    actions: {
        // 设置表格数据
        setTableData(data) {
            this.tableData = data;
        }
    },
});
