<template>
    <div class="homepage container--gap">
        <section>
            <the-showcase/>
        </section>
        <section class="container--gap">
            <b-container>
                <row-food-section :recipes="recipes"/>
            </b-container>
            <b-container>
                <row-food-section :recipes="recipes"/>
            </b-container>
            <b-container>
                <row-food-section :recipes="recipes"/>
            </b-container>
        </section>
    </div>
</template>

<script>
import CardsCarousel  from '@/components/CardsCarousel';
import RowFoodSection from '@/components/RowFoodSection';
import TheShowcase    from '@/components/TheShowcase';

export default {
    name:       'HomeView',
    components: {RowFoodSection, TheShowcase, CardsCarousel},
    data() {
        return {
            recipes: [],
        };
    },
    async created() {
        this.recipes = await this.$store.dispatch('getHomeRecipes');
    },
};
</script>

<style lang="scss">
.homepage {
    padding-bottom: 3.12rem;
    background: linear-gradient(to bottom, #fff 11rem, $background-blue 17rem);
}

.container--gap {
    display: flex;
    flex-direction: column;
    gap: 3rem;

    &::after {
        content: '';
    }
}
</style>
