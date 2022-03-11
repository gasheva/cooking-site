<template>
    <div>
        <b-carousel
            id="carousel-1"
            v-model="slide"
            :interval="4000"
            controls
            indicators
            background="#ababab"
            img-width="1024"
            img-height="480"
            style="text-shadow: 1px 1px 2px #333;"
            @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd"
        >
            <b-carousel-slide v-for="card in cards" :key="card.id">
                <template #img>
                    <food-card-filled :card="card">
                    </food-card-filled>
                </template>
            </b-carousel-slide>

        </b-carousel>
    </div>
</template>

<script>
import FoodCardFilled from '@/components/FoodCardFilled';

export default {
    name:       'CardsCarousel',
    components: {FoodCardFilled},
    data() {
        return {
            cards:   [
                {id: '1', title: 'Try best recipes from over the world', text: 'We keep recipes from 100 countries', img:''},
                {id: '2', title: 'Find your favourite recipe', text: 'Everyone finds something for yourself', img:''},
                {id: '3', title: 'Exotic food', text: 'Try new recipes everyday', img:''},],
            slide:   0,
            sliding: null,
        };
    },
    methods: {
        onSlideStart(slide) {
            this.sliding = true;
        },
        onSlideEnd(slide) {
            this.sliding = false;
        },
    },
};
</script>

<style>
</style>