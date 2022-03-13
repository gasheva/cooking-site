import Vue                         from 'vue';
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue';
import Snotify, {SnotifyPosition}  from 'vue-snotify';

import App              from '@/App.vue';
import router           from '@/router';
import store            from '@/store';
import logger           from '@/plugins/log.plugin';
import timeFilter       from '@/filters/time.filter';
import ingredientFilter from '@/filters/ingredient.filter';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(logger);
Vue.use(Snotify, {
    toast: {
        position: SnotifyPosition.rightTop,
        timeout:  3000,
    },
});
Vue.filter('timeFilter', timeFilter);
Vue.filter('ingredientFilter', ingredientFilter);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
