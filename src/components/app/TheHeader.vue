<template>
    <div class="header-wrapper">
        <b-navbar toggleable="lg" type="light" variant="info">
            <b-navbar-brand :to="{name:'Home'}">Rosemary</b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-item-dropdown class="header-wrapper_user" right v-if="isAuth">
                        <template #button-content>
                            <em>{{ user.login }}</em>
                        </template>
                        <b-dropdown-item :to="{name:'Profile'}">Profile</b-dropdown-item>
                        <b-dropdown-item @click.prevent="signOut">Sign Out</b-dropdown-item>
                    </b-nav-item-dropdown>

                    <b-navbar-nav right v-else>
                        <b-nav-item @click.prevent="signUp">Sign up</b-nav-item>
                        <b-nav-item @click.prevent="signIn">Sign in</b-nav-item>
                    </b-navbar-nav>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
export default {
    name:     'TheHeader',
    computed: {
        isAuth() {
            return this.$store.getters.isAuth;
        },
        user() {
            return this.$store.getters.user;
        },
    },
    mounted() {
        this.$store.dispatch('getUserInfo');
    },
    methods: {
        signOut() {
            this.$log('Sign out');
        },
        signUp() {
            this.$log('Sign up');
        },
        signIn() {
            this.$log('Sign in');
        },
    },
};
</script>

<style lang="scss" scoped>
.header-wrapper {
    .navbar-brand {
        text-transform: uppercase;
        color: black !important;
    }

    .navbar {
        background-color: $yellow !important;
    }

    &_user {
        outline: none !important;

        > a {
            outline: none !important;
        }
    }
}
</style>