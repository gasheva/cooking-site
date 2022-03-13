<template>
    <div class="d-flex flex-column">
         <textarea class="form-control c-textarea--fixed f-14 placeholder--grey-blue mb-3"
                   :class="{'is-invalid': isInvalid}"
                   placeholder="Join the discussion..."
                   v-model.trim="commentText"
                   :maxlength="maxLength"
                   @keydown.enter.prevent="post"
                   ref="comment"
                   :state="validateCommentText"
         >
            </textarea>
        <b-btn variant="secondary" class="action-button align-self-end" @click="post">Post comment</b-btn>
    </div>
</template>

<script>
import constants             from '@/constants/constants';
import {minLength, required} from 'vuelidate/lib/validators';

export default {
    name: 'Comment',
    data() {
        return {
            maxLength:   constants.commentMaxLength,
            commentText: '',
            isInvalid:   false,
        };
    },
    validations: {
        commentText: {required, minLength: minLength(1)},
    },
    computed:    {
        validateCommentText() {
            return this.$v.commentText.$dirty
                   ? this.$v.commentText.required && this.$v.commentText.minLength
                   : null;
        },
    },
    watch:       {
        commentText() {
            this.isInvalid = false;
        },
    },
    methods:     {
        post() {
            this.$v.$touch();
            if (this.$v.$error) {
                this.isInvalid = true;
                return;
            }
            this.$emit('post', this.commentText);
        },
    },
};
</script>

<style scoped>
</style>