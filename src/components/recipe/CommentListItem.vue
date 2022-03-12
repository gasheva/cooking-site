<template>
    <div class="comment">
        <div class="comment_header">
            <span class="comment_author">{{ author }}</span>
            <span class="comment_date"> • {{ dateFrom | timeFilter('date')}}</span>
        </div>
        <div class="comment_body">
            <p>{{ comment }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name:  'CommentListItem',
    props: {
        author:   {
            type:     String,
            required: true,
        },
        dateFrom: {
            type:     Date,
            required: true,
        },
        comment:  {
            type:     String,
            required: true,
        },
    },
};
</script>

<style lang="scss" scoped>
.comment {
    text-align: left;
    font-size: 15px;
    &_header{
        line-height: 1;
        font-size: 13px;
    }
    &_date {
        font-weight: 500;
        font-size: 12px;
        color: #687a86;
    }

    &_author {
        color: #656c7a;
        font-weight: 700;
    }
}

</style>