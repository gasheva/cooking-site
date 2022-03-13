<template>
    <b-container class="text-justify mb-4 mt-4">
        <button
            v-for="tab in tabs"
            :key="tab"
            :class="['tab-button', { active: currentTab === tab }]"
            @click="currentTab = tab"
        >
            {{ tab }}
        </button>
        <keep-alive>
            <component :is="currentTab" class="tab">
                <router-view/>
            </component>
        </keep-alive>
    </b-container>
</template>

<script>
import Comments  from '@/views/profile/CommentsView';
import Favorites from '@/views/profile/FavoritesView';

export default {
    name:       'Profile',
    components: {Favorites, Comments},
    data() {
        return {
            currentTab: 'Favorites',
            tabs:       ['Favorites', 'Comments'],
        };
    },
};
</script>

<style lang="scss" scoped>
.tab-button {
    padding: 6px 10px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    border: 1px solid #ccc;
    cursor: pointer;
    background: #f0f0f0;
    margin-bottom: -1px;
    margin-right: -1px;
}

.tab-button:hover {
    background: #e0e0e0;
}

.tab-button.active {
    background: #e0e0e0;
}

.tab {
    border: 1px solid #ccc;
    padding: 10px;
}

</style>