<template>
    <div class="recipe-header d-flex flex-column text-left">
        <h1 class="mb-5 mt-5">
            {{ title }}
        </h1>
        <div class="d-flex flex-row justify-content-between">
            <div class="d-flex flex-column align-items-start">
                <span class="mb-1">
                    Author: <em>{{ author }}</em>
                </span>
                <span class="rating">
                    <b-link class="link--no-decor">
                        <b-icon-star-fill class="rating_star mr-2"/>
                        <span>{{ rate }}</span>
                    </b-link>
                </span>
            </div>
            <b-link @click.prevent="bookmark" class="bookmark-button h4 m-0" v-if="isAuth">
                <b-icon-bookmark-heart-fill v-if="isBookmarked"/>
                <b-icon-bookmark-heart v-else/>
            </b-link>
        </div>
    </div>
</template>

<script>
export default {
    name:     'RecipeHeader',
    props:    {
        title:        {
            type:     String,
            required: true,
        },
        author:       {
            type:     String,
            required: true,
        },
        rate:         {
            type:     Number,
            required: true,
        },
        isBookmarked: {
            type:    Boolean,
            default: () => false,
        },
    },
    computed: {
        isAuth() {
            return this.$store.getters.isAuth;
        },
    },
    methods:  {
        bookmark() {
            this.$emit('toggle');
        },
    },
};
</script>

<style lang="scss" scoped>
.recipe-header {
    border-bottom: 1px solid $yellow;
    padding-bottom: .1rem;

    .rating {
        &_star {
            color: teal;
        }
    }
}

.bookmark-button {
    color: red !important;
    display: flex;
    align-items: center;
}
</style>