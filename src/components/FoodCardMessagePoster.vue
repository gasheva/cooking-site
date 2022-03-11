<template>
    <div class="food-card_plane">
        <p class="food-card_header">
            {{ title }}
        </p>
        <p class="food-card_text">
            {{ text }}
        </p>
    </div>
</template>

<script>
export default {
    name:  'FoodCardMessagePoster',
    props: {
        title: {
            type:     String,
            required: true,
        },
        text:  {
            type:     String,
            required: true,
        },
    },
};
</script>

<style scoped>

</style>