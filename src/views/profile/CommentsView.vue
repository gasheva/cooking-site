<template>
    <div>
        <div class="comments_list comments_list--settings d-flex flex-column" v-if="!isLoading">
            <b-link v-for="comment in comments" class="link--no-decor">
                <comment-list-item :author="comment.author"
                                   :date-from="comment.dateFrom"
                                   :comment="comment.comment"/>
            </b-link>
        </div>
        <div class="text-center" v-else>
            <b-spinner/>
        </div>
    </div>
</template>

<script>
import CommentListItem from '@/components/recipe/CommentListItem';

export default {
    name:       'CommentsView',
    components: {CommentListItem},
    data() {
        return {
            comments:  null,
            isLoading: true,
        };
    },
    async created() {
        this.comments  = await this.$store.dispatch('getUserComments');
        this.isLoading = false;
    },
    methods: {},
};
</script>

<style lang="scss" scoped>
</style>