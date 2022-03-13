<template functional>
    <div class="recipe-step text-justify" :class="data.staticClass">
        <h3 class="text-left">
            {{ (props.number + 1) + '. ' + props.title + ':' }}
        </h3>
        <p class="recipe-step_text">{{ props.text }}</p>
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