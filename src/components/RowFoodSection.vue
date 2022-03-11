<template>
    <b-row class="row-food">
        <b-col cols="4" v-for="recipe in recipes" :key="recipe.id">
            <b-link class="link--no-decor" :to="{name:'Recipe', params:{id:recipe.id}}">
                <food-card :recipe="recipe"/>
            </b-link>
        </b-col>
    </b-row>
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