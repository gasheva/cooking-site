<template>
    <div class="homepage">
        <section>
            <the-showcase/>
        </section>
        <section>
            <cards-carousel/>
        </section>
        <section>
            <cards-carousel/>
        </section>
        <section>
            <cards-carousel/>
        </section>
    </div>
</template>

<script>
import CardsCarousel from '@/components/CardsCarousel';
import TheShowcase   from '@/components/TheShowcase';

export default {
    name:       'HomeView',
    components: {TheShowcase, CardsCarousel},
};
</script>
