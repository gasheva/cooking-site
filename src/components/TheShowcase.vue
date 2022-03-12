<template>
    <b-row class="showcase">
        <b-col cols="7" class="poster">
            <b-link>
                <food-card-filled :img="poster.img">
                    <food-card-message-poster :title="poster.title" :text="poster.text"/>
                </food-card-filled>
            </b-link>
        </b-col>
        <b-col cols="5" class="advertisement pr-5">
            <div class="advertisement_header">
                <b-img src="/img/logo2.png" fluid alt="Rosemary finds your favourite recipe"/>
            </div>
            <div class="advertisement_text">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias commodi dolorum ipsam laborum odit
                    quasi quis, reiciendis sequi sunt, totam voluptate voluptatem voluptatibus.
                </p>
            </div>
            <div class="advertisement_body">
                <cards-carousel class="advertisement_carousel"/>
            </div>
        </b-col>
    </b-row>
</template>

<script>
import CardsCarousel         from '@/components/CardsCarousel';
import FoodCardFilled        from '@/components/FoodCardFilled';
import FoodCardMessagePoster from '@/components/FoodCardMessagePoster';

export default {
    name:       'TheShowcase',
    components: {FoodCardMessagePoster, FoodCardFilled, CardsCarousel},
    data() {
        return {
            poster: {
                id:    '1',
                title: 'Try best recipes from over the world',
                text:  'We keep recipes from 100 countries',
                img:   '/img/poster.webp',
            },
        };
    },
};
</script>

<style lang="scss">
.showcase {
    max-height: calc(100vh - 57px) !important;
    height: calc(100vh - 57px) !important;
    min-height: calc(100vh - 57px) !important;

    .poster {
        max-height: 100%;
        height: 100%;
    }

    .advertisement {
        display: flex;
        flex-direction: column;
        max-height: 100%;

        &_header {
            flex: 1;

            > img {
                height: 150px;
            }
        }

        &_body {
            display: flex;
            align-items: end;
            flex: 6;
        }

        &_carousel {
            width: 100%;

            .carousel-inner {
                max-height: 400px;
                width: 100%;
            }
        }
    }

}
</style>