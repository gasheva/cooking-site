<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand :to="{name:'Home'}">NavBar</b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <!--                    <b-nav-form>-->
                    <!--                        <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>-->
                    <!--                        <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>-->
                    <!--                    </b-nav-form>-->

                    <!--                    <b-nav-item-dropdown text="Lang" right>-->
                    <!--                        <b-dropdown-item href="#">EN</b-dropdown-item>-->
                    <!--                        <b-dropdown-item href="#">RU</b-dropdown-item>-->
                    <!--                    </b-nav-item-dropdown>-->

                    <b-nav-item-dropdown right v-if="isAuth">
                        <template #button-content>
                            <em>User</em>
                        </template>
                        <b-dropdown-item :to="{name:'Profile'}">Profile</b-dropdown-item>
                        <b-dropdown-item :to="{name:'Favorites'}">Favorites</b-dropdown-item>
                        <b-dropdown-item :to="{name:'Settings'}">Settings</b-dropdown-item>
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
    },
    methods:  {
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

<style scoped>

</style>