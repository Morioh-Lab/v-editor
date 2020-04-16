
import Editor from './editor.vue';


var __EditorPlugin = {
    install: function (Vue) {
        if (Vue.__editor_installed) {
            return;
        }

        Vue.__editor_installed = true;

        Vue.component('v-editor', Editor);
    }
};

if (typeof window !== 'undefined' && window.Vue) {
    Vue.use(__EditorPlugin);
}

export default __EditorPlugin;