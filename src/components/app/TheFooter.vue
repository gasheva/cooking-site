<template>
    <div class="footer bg-dark text-light d-flex align-items-center justify-content-center h-100">
        <span> © {{ (new Date().getFullYear()) }} Discovery or its subsidiaries and affiliates. All rights reserved.</span>
    </div>
</template>

<script>
export default {
    name: 'TheFooter',
};
</script>

<style scoped>
.footer {
    font-size: .75rem;
}
</style>