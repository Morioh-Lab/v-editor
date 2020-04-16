

import './layout.css';
// import '../dist/v-markdown-editor.css';

import Vue from 'vue';
import App from './app.vue';
import Editor from '../dist/v-editor';
// import Editor from '@junhao/vue-editorjs';

Vue.use(Editor);

Vue.config.devtools = process.env.NODE_ENV !== 'production';

new Vue({
  el: '#app', 
 
  render: h => h(App)
})
