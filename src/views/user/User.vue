<template>
    <div class="user-container">
        <div>
            <h2>學生資料</h2>
            <p><strong>名稱：</strong>{{ user.lastName + user.firstName }}</p>
            <p><strong>電子郵件：</strong>{{ user.email }}</p>
        </div>
        <div>
            <h2>課程</h2>
            <table>
                <thead>
                    <tr>
                        <th>課程名稱</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="lecture in user.lectures" :key="lecture.id">
                        <td>{{ lecture.name }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
    import { ref, onMounted } from 'vue';
    // import Swal from 'sweetalert2';

    const user = ref({});
    onMounted(() => {
        const userData = JSON.parse(sessionStorage.getItem('userData'));
        user.value = userData;
    });
</script>

<style scoped>
.user-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f9f9f9;
}

h2 {
    text-align: center;
    color: #333;
}

.user-details {
    margin-top: 20px;
}
</style>