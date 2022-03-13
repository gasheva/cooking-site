<template>
    <div>
        <div class="comments_list comments_list--settings d-flex flex-column" v-if="!isLoading">
            <b-link v-for="comment in paginatedDisplayingItems[page-1]"
                    :to="{name:'Recipe', params:{'id':comment.recipeId}}" class="link--no-decor">
                <comment-list-item :author="comment.author"
                                   :date-from="comment.dateFrom"
                                   :comment="comment.comment"/>
            </b-link>

            <div class="pagination-container d-flex justify-content-end">
                <b-pagination
                    v-model="page"
                    :total-rows="pageCount"
                    :per-page="pageSize"
                    @input="pageChangeHandler"
                />
            </div>
        </div>
        <div class="text-center" v-else>
            <b-spinner/>
        </div>
    </div>
</template>

<script>
import CommentListItem from '@/components/recipe/CommentListItem';
import pagination      from '@/mixins/pagination.mixin';

export default {
    name:       'CommentsView',
    components: {CommentListItem},
    mixins:     [pagination],
    data() {
        return {
            comments:  null,
            isLoading: true,
        };
    },
    async created() {
        let resp = await this.$store.dispatch('getUserComments', {current: this.page, per: this.pageSize});
        if (resp.error_code) {
            this.$store.dispatch('showError', resp);
            return;
        }
        this.comments = resp;
        this.setupPagination(this.comments);
        this.isLoading = false;
    },
    methods: {},
};
</script>

<style lang="scss" scoped>
</style>