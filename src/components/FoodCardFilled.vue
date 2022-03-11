<template>
    <b-card
        overlay
        img-src="https://picsum.photos/900/250/?image=3"
        img-alt="Card Image"
        text-variant="white"
        title="Image Overlay"
        sub-title="Subtitle"
    >
        <b-card-text>
            <div class="food-card_plane">
                <p class="food-card_header">
                    Try best recipes from over the world
                </p>
                <p class="food-card_text">
                    We collect
                </p>
            </div>
        </b-card-text>
    </b-card>
</template>

<script>
export default {
    name:  'FoodCardFilled',
    props: {
        card: {
            type:     Object,
            required: true,
        },
    },
};
</script>

<style lang="scss" scoped>
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