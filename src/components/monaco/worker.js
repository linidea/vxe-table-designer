import EditorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker';
import JsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker';
// 解决控制台报错问题, 如果不加这个, 控制台会报错, 但是不影响使用
window.MonacoEnvironment = {
    getWorker(_workerId, label) {
        if (label === 'json') {
            return new JsonWorker();
        }
        return new EditorWorker();
    }
};
