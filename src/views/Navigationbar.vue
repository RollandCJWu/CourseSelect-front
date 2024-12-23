<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <span class="navbar-brand">選課系統</span>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown"
                    aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <RouterLink to="/" class="nav-link active" aria-current="page" >首頁</RouterLink>
                    </li>
                    <li v-if="!usersStore.login" class="nav-item">
                        <RouterLink to="/secure/login" class="nav-link" aria-current="page" >登入</RouterLink>
                    </li>

                    <li v-if="usersStore.firstName == 'sa'" class="nav-item">
                        <RouterLink to="/admin" class="nav-link" aria-current="page" >管理</RouterLink>
                    </li>
                    <li v-if="usersStore.login>0" class="nav-item">
                        <RouterLink to="/user" class="nav-link" aria-current="page" >用戶</RouterLink>
                    </li>

                    <li v-if="usersStore.login" class="nav-item">
                        <button @click="logout" class="nav-link btn btn-link">登出</button>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup>
    import useUsersStore from '@/store/users.js';
    import { useRouter } from 'vue-router';
    const usersStore = useUsersStore();
    const router = useRouter();

    const logout = () => {
        usersStore.logout();
        alert("您已成功登出。");

        router.push({ name: "home-link" });
    };
</script>
    
<style>
    
</style>