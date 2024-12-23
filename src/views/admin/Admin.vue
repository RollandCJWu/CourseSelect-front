<template>
    <div>
        <h3>列表</h3>
        <br>

        <table>
            <thead>
                <tr>
                    <th>Account</th>
                    <th>Birth Date</th>
                    <th>Email</th>
                    <th>Phone No</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.id">
                    <td>{{ user.account }}</td>
                    <td>{{ user.birthDate }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.phoneNo }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axiosapi from "@/plugins/axios.js";

export default {
    components: {
    },

    data() {
        return {
           
        };
    },

    methods: {
        
    }
};
</script>

<style scoped>
table {
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
    font-size: 18px;
    font-family: 'Arial', sans-serif;
    min-width: 400px;
}

th,
td {
    border: 1px solid #ddd;
    padding: 12px 15px;
    text-align: left;
}

th {
    background-color: #f2f2f2;
    color: #333;
    font-weight: bold;
}

tr {
    border-bottom: 1px solid #ddd;
}

tr:nth-of-type(even) {
    background-color: #f9f9f9;
}

tr:hover {
    background-color: #f1f1f1;
}

@media (max-width: 600px) {
    table {
        font-size: 14px;
    }

    th,
    td {
        padding: 10px 8px;
    }
}
</style>