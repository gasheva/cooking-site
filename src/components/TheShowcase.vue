<template>
    <b-row>
        <b-col class="showcase-grid">
            <b-link>
                <figure>
                    <div>
                        <b-img src="/img/poster.webp" fluid alt="Recipe of the day"/>
                    </div>
                </figure>
            </b-link>
        </b-col>
        <b-col class="advertisement">
            <div class="advertisement_header">
                <b-img src="/img/logo2.png" fluid alt="Rosemary finds your favourite recipe"/>
            </div>
            <div class="advertisement_body">
                <cards-carousel/>
            </div>
        </b-col>
    </b-row>
</template>

<script>
import CardsCarousel from '@/components/CardsCarousel';

export default {
    name:       'TheShowcase',
    components: {CardsCarousel},
};
</script>

<style lang="scss">
.advertisement {
    display: flex;
    flex-direction: column;

    &_header {
        flex: 1;
        background-color: #42b983;
    }

    &_body {
        flex: 2;
    }
}
</style>