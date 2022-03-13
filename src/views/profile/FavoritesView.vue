<template>
    <div>
        <div v-if="!isLoading">
            <b-link v-for="favorite in favorites" class="link--no-decor">

            </b-link>
        </div>
        <div class="text-center" v-else>
            <b-spinner/>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Favorites',
    data() {
        return {
            favorites: null,
            isLoading: true,
        };
    },
    async created() {
        this.favorites = await this.$store.dispatch('getUserFavorites');
        this.isLoading = false;
    },
};
</script>

<style scoped>

</style>