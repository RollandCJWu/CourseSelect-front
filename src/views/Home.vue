<template>
    <h3 v-if="usersStore.login>0">歡迎 {{ usersStore.email }}</h3>
</template>

<script setup>
    import useUsersStore from '@/store/users.js';
    const usersStore = useUsersStore();
</script>

<style>

</style>