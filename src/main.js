import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VModal from 'vue-js-modal';
import vSelect from 'vue-select';
import _ from 'lodash';
import 'bootstrap/dist/css/bootstrap.css'
import 'vue-select/dist/vue-select.css';

Vue.config.productionTip = false
Object.defineProperty(Vue.prototype, '_', { value: _ });

Vue.use(VModal);
Vue.component('v-select', vSelect);

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')