import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import "@css/main/main.less";

function registComponents(requireComponent, prefix='') {
  requireComponent.keys().forEach(fileName => {
    const componentConfig = requireComponent(fileName);
    const componentName = fileName.split('/').pop().replace(/\.\w+$/, '');

    // console.log(`regist "${prefix + componentName}"...`);
    Vue.component(prefix + componentName, componentConfig.default || componentConfig);
  });
}

const requireComponent_global = require.context('./components/global', false, /[a-zA-Z-]+\.vue$/);
const requireComponent_cy = require.context('./components/global/Cyteria', false, /[a-zA-Z-]+\.vue$/);

registComponents(requireComponent_global);
registComponents(requireComponent_cy, 'cy-');

new Vue({
  render: h => h(App),
}).$mount('#app')