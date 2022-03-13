<template>
    <div class="favorites">
        <div class="favorites_wrapper d-flex flex-wrap justify-content-around" v-if="!isLoading">
            <b-link :to="{name:'Recipe', params:{'id':favorite.id}}" v-for="favorite in favorites"
                    class="link--no-decor">
                <food-card :recipe="favorite"/>
            </b-link>
        </div>
        <div class="text-center" v-else>
            <b-spinner/>
        </div>
    </div>
</template>

<script>
import FoodCard from '@/components/FoodCard';

export default {
    name:       'Favorites',
    components: {FoodCard},
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

<style lang="scss" scoped>
.favorites {
    &_wrapper {
        gap: 2rem;
        padding-bottom: 3rem;

        > * {
            outline: 2px solid #ccc;
            border-radius: 5px;
        }
    }
}
</style>