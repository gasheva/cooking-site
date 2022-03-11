<template>
    <b-card
        no-body
        style="max-width: 20rem;"
        text-variant="black"
        title="Image Overlay"
        sub-title="Subtitle"
        class="food-card"
    >
        <b-card-img-lazy
            :src="recipe.img"
            alt="Dish picture"
        >
        </b-card-img-lazy>

        <b-card-text class="food-card_body">
            <span class="food-card_tag text-truncating text-truncating_1line">{{ recipe.tag }}</span>
            <h4 class="food-card_header text-truncating text-truncating_4lines mb-0">{{ recipe.title }}</h4>
        </b-card-text>
    </b-card>
</template>

<script>
export default {
    name:  'FoodCard',
    props: {
        recipe: {
            type:     Object,
            required: true,
        },
    },
};
</script>

<style lang="scss">
.food-card {
    &_body {
        text-align: start;
        padding-left: 1.5rem;
        padding-right: 1.5rem;
        padding-top: 0.25rem;
    }

    &_tag {
        color: #b5460f;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-size: .75rem;
        line-height: 30px;
        font-weight: 700;
        font-family: $tag-font;
    }

    &_header {
        font-size: 1.75rem;
    }
}
</style>