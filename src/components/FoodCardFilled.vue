<template>
    <b-card
        overlay
        :img-src="img"
        img-alt="Card Image"
        text-variant="white"
        class="food-card-filled"
    >
        <b-card-text>
            <slot></slot>
        </b-card-text>
    </b-card>
</template>

<script>
export default {
    name:  'FoodCardFilled',
    props: {
        img: {
            type:     String,
            required: true,
        },
    },
};
</script>

<style lang="scss">
.food-card-filled {
    height: 100%;
    max-height: 100%;
    border: none !important;

    .position-relative {
        height: 100%;
        max-height: 100%;
        overflow: hidden;

        .card-img {
            height: 100%;
            max-height: 100%;
            object-fit: cover;
        }
    }

}
</style>