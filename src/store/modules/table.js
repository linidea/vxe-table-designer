// 表格数据
import {defineStore} from "pinia";
import {debounce} from "lodash";
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
        setTableData: function (data) {
            try {
                if (typeof data === 'string') {
                    data = JSON.parse(data);
                }
                this.tableData = data;
            } catch (e) {
                console.error('setTableData error:', e);
            }
        }
    },
});
