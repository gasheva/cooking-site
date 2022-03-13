import Vue       from 'vue';
import VueRouter from 'vue-router';
import store     from '@/store';

Vue.use(VueRouter);

const routes = [
    {
        path:      '/recipes',
        name:      'Home',
        meta:      {public: true, title: process.env.VUE_APP_NAME + '. Рецепты'},
        component: () => import(/* webpackChunkName: "home" */ '@/views/HomeView.vue'),
    },
    {
        path:      '/recipes/:id',
        name:      'Recipe',
        meta:      {public: true, title: process.env.VUE_APP_NAME + '. Рецепты'},
        component: () => import(/* webpackChunkName: "recipes" */ '@/views/RecipeView.vue'),
    },
    {
        path:      '/profile',
        name:      'Profile',
        meta:      {public: false, title: process.env.VUE_APP_NAME + '. Профиль'},
        component: () => import(/* webpackChunkName: "profile" */ '@/views/profile/ProfileView.vue'),
    },
    {
        path:     '/*',
        redirect: '/recipes',
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => !record.meta.public)) {
        if (!store.getters.isAuth) {
            return;
        }
    }
    next();
});

router.afterEach((to) => {
    window.document.title = to.meta.title;
});


export default router;
