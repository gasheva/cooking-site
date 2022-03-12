<template>
    <div class="d-flex flex-column">
         <textarea class="form-control c-textarea--fixed f-14 placeholder--grey-blue mb-3"
                   placeholder="Join the discussion..."
                   v-model.trim="commentText"
                   :maxlength="maxLength"
                   @keydown.enter.prevent="post"
                   ref="comment">
            </textarea>
        <b-btn variant="secondary" class="action-button align-self-end" @click="post">Post comment</b-btn>
    </div>
</template>

<script>
import constants from '@/constants/constants';

export default {
    name: 'Comment',
    data() {
        return {
            maxLength:   constants.commentMaxLength,
            commentText: '',
        };
    },
    methods: {
        post() {
            this.$emit('post', this.commentText);
        },
    },
};
</script>

<style scoped>
</style>