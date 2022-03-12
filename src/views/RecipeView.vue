<template>
    <b-container class="recipe h-100" v-if="recipe">
        <div class="recipe_header">
            <recipe-header :title="recipe.title" :rate="recipe.rate" :author="recipe.author"
                           :is-bookmarked="isBookmarked"
                           @toggle="toggleBookmark"
            />
        </div>

        <b-container class="recipe_body py-5">
            <!--PICTURE-->
            <div>
                <p class="text-justify">{{ recipe.description }}</p>
                <div class="recipe-image">
                    <figcaption>
                        <b-img class="recipe-image_image" fluid :src="recipe.img" :alt="recipe.title"/>
                        <div class="text-left">
                            <span class="image-author-text">Image: {{ recipe.author }}</span>
                        </div>
                    </figcaption>
                </div>
            </div>
            <!--INGREDIENTS-->
            <div>
                <h2 class="recipe_title">Ingredients</h2>
                <ul class="recipe_list text-left">
                    <li v-for="(ingredient, index) in recipe.ingredients" :key="index">
                        {{ ingredient | ingredientFilter }}
                    </li>
                </ul>
            </div>
            <!--METHOD-->
            <div>
                <h2 class="recipe_title">Method</h2>
                <recipe-step v-for="(step, index) in recipe.steps" :key="index" :title="step.title" :text="step.text"
                             :number="index"/>
            </div>

        </b-container>
        <div class="recipe_comments"></div>
    </b-container>
</template>

<script>
import RecipeHeader from '@/components/recipe/RecipeHeader';
import RecipeStep   from '@/components/recipe/RecipeStep';

export default {
    name:       'RecipeView',
    components: {RecipeStep, RecipeHeader},
    data() {
        return {
            recipe:       null,
            comments:     null,
            isBookmarked: false,
        };
    },
    async created() {
        const id      = this.$route.params.id;
        this.recipe   = await this.$store.dispatch('getRecipe', id);
        this.comments = await this.$store.dispatch('getComments', id);
    },
    methods: {
        async toggleBookmark() {
            this.isBookmarked = await this.$store.dispatch('toggleBookmark', this.recipe.id);
        },
    },
};
</script>

<style lang="scss" scoped>
.recipe {
    font-size: 1.125rem;

    &_body {
        padding-right: 30%;

        > * + * {
            margin-bottom: 4rem;
        }
    }

    &_title {
        border-bottom: 1px solid $yellow;
        padding-bottom: .1rem;
        text-align: left;
        margin-bottom: 1.5rem;
    }

    &_list {
        padding-left: 1rem;
    }
}

.recipe-image {
    max-height: 500px;
    max-width: 500px;
    margin: 3rem auto;

    &_image {
        object-fit: cover;
        width: 100% !important;
    }
}

.image-author-text {
    font-size: .875rem;
    font-family: $tag-font;
    color: #888;
}
</style>