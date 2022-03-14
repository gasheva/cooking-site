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


            <div class="comments pb-5">
                <h2 class="recipe_title">Comments</h2>
                <div class="comments_comment mb-5" v-if="isAuth">
                    <Comment @post="postComment" :key="'c_'+tracker"/>
                </div>
                <div class="comments_list d-flex flex-column">
                    <comment-list-item v-for="comment in comments" :author="comment.author"
                                       :date-from="comment.dateFrom"
                                       :comment="comment.comment"/>
                </div>
            </div>
        </b-container>
    </b-container>
    <div class="text-center" v-else>
        <b-spinner class="mt-4"/>
    </div>
</template>

<script>
import Comment         from '@/components/recipe/Comment';
import CommentListItem from '@/components/recipe/CommentListItem';
import RecipeHeader    from '@/components/recipe/RecipeHeader';
import RecipeStep      from '@/components/recipe/RecipeStep';

export default {
    name:       'RecipeView',
    components: {Comment, CommentListItem, RecipeStep, RecipeHeader},
    data() {
        return {
            recipe:       null,
            comments:     null,
            isBookmarked: false,
            tracker:      0,
        };
    },
    computed: {
        isAuth() {
            return this.$store.getters.isAuth;
        },
    },
    async created() {
        const id          = this.$route.params.id;
        const recipeResp  = this.$store.dispatch('getRecipe', id);
        const commentResp = this.$store.dispatch('getComments', id);
        this.recipe       = await recipeResp;
        this.comments     = await commentResp;
    },
    methods: {
        async toggleBookmark() {
            let resp = await this.$store.dispatch('toggleBookmark', this.recipe.id);
            if (resp.error_code) {
                this.$store.dispatch('showError', resp);
                return;
            }
            this.isBookmarked = resp;
        },
        async postComment(comment) {
            let resp = await this.$store.dispatch('postComment', {comment: comment, recipeId: this.recipe.id});
            if (!resp.error_code) {
                this.comments = resp;
                this.tracker++;
            } else {
                this.$store.dispatch('showError', resp);
            }
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