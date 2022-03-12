import Vue                         from 'vue';
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue';

import App        from '@/App.vue';
import router     from '@/router';
import store      from '@/store';
import logger     from '@/plugins/log.plugin';
import timeFilter from '@/filters/time.filter';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(logger);
Vue.filter('timeFilter', timeFilter);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
