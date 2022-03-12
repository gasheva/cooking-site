<template>
    <div id="app" class="app scrollable">
        <header class="app_header">
            <Header></Header>
        </header>
        <main class="app_body">
            <router-view/>
        </main>
        <footer class="app_footer">
            <Footer/>
        </footer>
    </div>
</template>

<script>
import Header from '@/components/app/TheHeader';
import Footer from '@/components/app/TheFooter';

export default {
    components: {
        Header,
        Footer,
    },
};
</script>

<style lang="scss">
.app {
    &_header {
        position: sticky;
        top: 0;
        z-index: 1000;
        border-bottom: 1px solid white;
        height: $header-height;
        //overflow: hidden;
    }

    &_body {
        min-height: calc(100vh - 66px - 57px);
    }

    &_footer {
        height: $footer-height;
    }
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

nav {
    padding: 30px;
}

nav a {
    font-weight: bold;
    color: #2c3e50;
}

nav a.router-link-exact-active {
    color: #42b983;
}
</style>
