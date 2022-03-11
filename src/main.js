import Vue                         from 'vue';
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue';

import App    from '@/App.vue';
import router from '@/router';
import store  from '@/store';
import Logger from '@/plugins/log.plugin'

import '@/assets/scss/style.scss';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(Logger);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
