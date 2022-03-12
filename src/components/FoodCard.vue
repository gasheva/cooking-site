<template>
    <b-card
        no-body
        style="max-width: 20rem;"
        text-variant="black"
        title="Image Overlay"
        sub-title="Subtitle"
        class="food-card"
    >
        <b-card-img-lazy
            :src="recipe.img"
            alt="Dish picture"
        >
        </b-card-img-lazy>

        <!--CARD BODY-->
        <b-card-text class="food-card_body">
            <span class="food-card_tag text-truncating text-truncating_1line">{{ recipe.tag }}</span>
            <h4 class="food-card_header text-truncating text-truncating_3lines mb-0">{{ recipe.title }}</h4>
        </b-card-text>

        <!--CARD FOOTER-->
        <b-card-text class="food-card_footer meta-text d-flex justify-content-between">
            <span>
                <b-icon-clock class="meta-text_icon mr-2"/>
                <span class="meta-text_text">{{ recipe.time | timeFilter }}</span>
            </span>
            <span>
                <span class="meta-text_text mr-2">{{ recipe.rate }}</span>
                <b-icon-star-fill class="meta-text_icon "/>
            </span>
        </b-card-text>
    </b-card>
</template>

<script>
export default {
    name:  'FoodCard',
    props: {
        recipe: {
            type:     Object,
            required: true,
        },
    },
};
</script>

<style lang="scss">
.food-card {
    height: 100%;
    border: none !important;

    &_body {
        flex: 5;
        text-align: start;
        padding-left: 1.5rem;
        padding-right: 1.5rem;
        padding-top: 0.25rem;
    }

    &_tag {
        color: #b5460f;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-size: .75rem;
        line-height: 30px;
        font-weight: 700;
        font-family: $tag-font;
    }

    &_header {
        font-size: 1.75rem;
    }

    &_footer {
        flex: 1;
        text-align: start;
        padding: 1.7rem;
    }

    .meta-text {
        display: flex;
        align-items: center;
        position: relative;
        font-size: 1rem;

        &_icon {
            color: teal;
        }

        &_text {
            font-family: $tag-font;
            font-size: .875rem;
            line-height: 1.14;
            color: #616161;
        }
    }
}
</style>