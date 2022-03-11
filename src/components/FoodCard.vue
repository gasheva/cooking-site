<template>
    <b-card
        no-body
        style="max-width: 20rem;"
        text-variant="white"
        title="Image Overlay"
        sub-title="Subtitle"
    >

        <template #header>
            <h4 class="mb-0">{{dish.name}}</h4>
        </template>

        <b-card-img-lazy
            src="https://picsum.photos/900/250/?image=3"
            alt="Dish picture"
        >
        </b-card-img-lazy>
        <b-card-text>
            Some quick example text to build on the card and make up the bulk of the card's content.
        </b-card-text>
    </b-card>
</template>

<script>
export default {
    name: 'FoodCard',
    props:{
        dish:{
            type: Object,
            required: true,
        }
    }
};
</script>

<style scoped>

</style>