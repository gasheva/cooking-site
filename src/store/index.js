import Vue  from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state:     {},
    getters:   {
        isAuth: state => true,
        user:   state => ({
            id:    '1',
            login: 'Behemoth',
            email: 'behemoth87@m.ru',
        }),
    },
    mutations: {},
    actions:   {
        async getUserInfo() {

        },
    },
    modules:   {},
});
