<template>
    <div class="favorites">
        <div v-if="!isLoading">
            <div class="favorites_wrapper d-flex flex-wrap justify-content-around">
                <b-link :to="{name:'Recipe', params:{'id':favorite.id}}"
                        v-for="favorite in paginatedDisplayingItems[page-1]"
                        class="link--no-decor">
                    <food-card :recipe="favorite"/>
                </b-link>
            </div>
            <div class="pagination-container d-flex justify-content-end">
                <b-pagination
                    v-model="page"
                    :total-rows="pageCount"
                    :per-page="pageSize"
                    @input="pageChangeHandler"
                />
            </div>
        </div>
        <div class="text-center" v-else>
            <b-spinner/>
        </div>
    </div>
</template>

<script>
import FoodCard   from '@/components/FoodCard';
import pagination from '@/mixins/pagination.mixin';

export default {
    name:       'Favorites',
    components: {FoodCard},
    mixins:     [pagination],
    data() {
        return {
            favorites: null,
            isLoading: true,
        };
    },
    async created() {
        let resp = await this.$store.dispatch('getUserFavorites');
        if (resp.error_code) {
            this.$store.dispatch('showError', resp);
            return;
        }
        this.favorites = resp;
        this.setupPagination(this.favorites);
        this.isLoading = false;
    },
};
</script>

<style lang="scss" scoped>
.favorites {
    &_wrapper {
        gap: 2rem;
        padding-bottom: 3rem;

        > a {
            outline: 2px solid #ccc;
            border-radius: 5px;

            &:hover {
                transform: translate(-2px, -2px);
                box-shadow: 5px 5px 0 $yellow;
                outline: none;
            }
        }
    }
}

.pagination-container {
    margin-left: auto;
}
</style>