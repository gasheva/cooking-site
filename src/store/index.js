import Vue  from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state:     {},
    getters:   {
        isAuth: state => true,
    },
    mutations: {},
    actions:   {},
    modules:   {},
});
