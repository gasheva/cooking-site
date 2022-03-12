<template>
    <div class="footer p-4 bg-dark text-light">
        <span> © {{(new Date().getFullYear())}} Discovery or its subsidiaries and affiliates. All rights reserved.</span>
    </div>
</template>

<script>
export default {
    name: 'TheFooter',
};
</script>

<style scoped>
.footer{
    font-size: .75rem;
}
</style>