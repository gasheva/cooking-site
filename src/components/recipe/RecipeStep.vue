<template>
    <div class="recipe-step text-justify">
        <h3 class="text-left">
            {{ (number + 1) + '. ' + title + ':' }}
        </h3>
        <p class="recipe-step_text">{{ text }}</p>
    </div>
</template>

<script>
export default {
    name:  'RecipeStep',
    props: {
        number: {
            type:     Number,
            required: true,
        },
        title:  {
            type:     String,
            required: true,
        },
        text:   {
            type:     String,
            required: true,
        },
    },
};
</script>

<style lang="scss" scoped>
.recipe-step {
    &_text {
        padding-left: 2rem;
    }
}

</style>