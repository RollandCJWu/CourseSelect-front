<template>
    <div class="login-container">
        <h3>登入</h3>

        <select v-model="loginType">
            <option value="teacher">Teacher</option>
            <option value="student">Student</option>
        </select>
        <form>
            <div>
                <div class="form-group">
                    <label for="email">信箱: </label>
                    <input type="text" id="email" v-model="email" @focus="clearError()">
                    <span class="error-message">{{ message }}</span>
                </div>
                <div class="form-group">
                    <label for="password">密碼: </label>
                    <input type="password" id="password" v-model="password" @focus="clearError()">
                </div>
                <div class="form-group">
                    <button type="button" @click="login()">Login</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import axiosapi from "@/plugins/axios.js"
import Swal from 'sweetalert2';
import { useRouter } from 'vue-router';
import useUsersStore from '@/store/users.js';

const usersStore = useUsersStore();
const router = useRouter();

const loginType = ref("teacher");
const email = ref(null);
const password = ref(null);
const message = ref(null);

function clearError() {
    message.value = "";
}

async function login() {
    if (email.value === "") {
        email.value = null;
    }
    if (password.value === "") {
        password.value = null;
    }
    let request = {
        email: email.value,
        password: password.value
    };

    axiosapi.defaults.headers.authorization = "";
    usersStore.setId("");
    usersStore.setFirstName("");
    usersStore.setLastName("");
    usersStore.setEmail("");
    usersStore.setLogin(false);

    try {
        const url = loginType.value === "teacher" ? "/teachers/login" : "/students/login";
        const response = await axiosapi.post(url, request);
        const { id, firstName, lastName, email } = response.data;

        if (response.data.success) {
            usersStore.setId(id);
            usersStore.setFirstName(firstName);
            usersStore.setLastName(lastName);
            usersStore.setEmail(email);
            if (loginType.value === "teacher") {
                usersStore.setLogin(1);
            } else {
                usersStore.setLogin(2);
            }

            Swal.fire({
                icon: "success",
                title: response.data.message,
            })
            
            router.push({ name: "home-link" });
        } else {
            message.value = response.data.message;
            Swal.fire({
                icon: "warning",
                title: response.data.message,
            });
        }
    } catch (error) {
        Swal.fire({
            icon: "error",
            title: "查詢失敗:" + error.message,
        });
    }
}

</script>

<style scoped>
.login-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    background-color: #f9f9f9;
}

h3 {
    text-align: center;
    color: #333;
}

.form-group {
    margin-bottom: 15px;
}

label {
    display: block;
    margin-bottom: 5px;
    color: #333;
}

input[type="text"] {
    width: 100%;
    padding: 8px;
    margin: 5px 0;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 4px;
}

input[type="password"] {
    width: 100%;
    padding: 8px;
    margin: 5px 0;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 4px;
}

button {
    background-color: #4CAF50;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background-color: #45a049;
}

.error-message {
    color: red;
    font-size: 0.9em;
}

p {
    text-align: center;
    color: #333;
}

.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal-content {
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
}

.modal-content h3 {
    margin-bottom: 20px;
}

.modal-content input {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.modal-content button {
    margin: 5px;
}
</style>