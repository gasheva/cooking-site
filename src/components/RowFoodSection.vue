<template>
    <div class="row-food">
        <header class="row-food_header">
            <b-link class="row-food_header-wrapper link--no-decor">
                <div class="link--no-decor row-food_title">
                    Air Fryer Favorites
                </div>
                <div class="h2">
                    <b-icon icon="arrow-right"></b-icon>
                </div>
            </b-link>
        </header>
        <b-row>
            <b-col cols="4" v-for="recipe in recipes" :key="recipe.id">
                <b-link class="link--no-decor" :to="{name:'Recipe', params:{id:recipe.id}}">
                    <food-card :recipe="recipe"/>
                </b-link>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import FoodCard from '@/components/FoodCard';

export default {
    name:       'RowFoodSection',
    components: {FoodCard},
    props:      {
        recipes: {
            type:     Array,
            required: true,
        },
    },
};
</script>

<style lang="scss">
.row-food {
    height: 400px;

    &_header-wrapper {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        border-bottom: 5px solid $yellow;

        &:hover {
            border-bottom: 5px solid #b28926;
        }
    }

    &_header {
        display: flex;
        align-content: center;
        justify-content: center;
        padding: 1rem 0 .375rem;
        margin-bottom: .625rem;
    }

    &_title {
        font-size: 2.25rem;
        line-height: 1.1;
        letter-spacing: .075rem;
        text-decoration: none;
        color: #222;
    }

    .card:hover {
        transform: translate(-2px, -2px);
        box-shadow: 5px 5px 0 $yellow;
    }
}

.link--no-decor {
    color: inherit;
    text-decoration: none;

    &:hover {
        color: inherit;
        text-decoration: none;
    }
}
</style>