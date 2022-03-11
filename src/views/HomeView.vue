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
            recipes: [
                {
                    id:    '1',
                    title: 'Air Fryer Cauliflower Buffalo Wings',
                    tag:   'Healthy Air Fryer',
                    time:  40,
                    rate:  2.3,
                    img:   '/img/recipes/Air-Fryer-Buffalo-Cauliflower.webp',
                },
                {
                    id:    '2',
                    title: 'Air Fryer Chicken Tenders',
                    tag:   'Kid-friendly',
                    time:  58,
                    rate:  4.3,
                    img:   '/img/recipes/Air-Fryer-Chickpeas.webp',
                },
                {
                    id:    '3',
                    title: 'Sticky Chinese Rice with Lạp Xưởng, Dried Shrimp, and Fryed Shiitake Mushrooms, and Crispy Air Fryer Tenders',
                    tag:   'Healthy Snacks and Appetizers',
                    time:  13,
                    rate:  0,
                    img:   '/img/recipes/albondigas-soup.webp',
                }],
        };
    },
};
</script>

<style lang="scss">
.container--gap {
    display: flex;
    flex-direction: column;
    gap: 3rem;
}
</style>
