<template>
    <div class="food-card_plane">
        <p class="food-card_header">
            {{ card.title }}
        </p>
        <p class="food-card_text">
            {{ card.text }}
        </p>
    </div>
</template>

<script>
export default {
    name:  'FoodCardMessageRecipe',
    props: {
        card: {
            type:     Object,
            required: true,
        },
    },
};
</script>

<style lang="scss">
.food-card_plane {
    background: rgba(204, 204, 204, 0.5); // opacity effect

    .food-card_header {
        color: black;
        font-size: 2.75rem;
    }

    .food-card_text {
        font-size: 1.125rem;
    }
}
</style>