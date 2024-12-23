import { defineStore } from "pinia";
import { ref } from "vue";

const useUsersStore = defineStore("userData", function () {
    const id = ref("");
    function setId(val) {
        id.value = val;
    }

    const firstName = ref("");
    function setFirstName(val) {
        firstName.value = val;
    }

    const lastName = ref("");
    function setLastName(val) {
        lastName.value = val;
    }

    const email = ref("");
    function setEmail(val) {
        email.value = val;
    }

    const lectures = ref([]);
    function setLectures(val) {
        lectures.value = val;
    }

    const login = ref(0);
    function setLogin(val) {
        login.value = val;
    }

    function logout() {
        setId("");
        setFirstName("");
        setLastName("");
        setEmail("");
        setLogin(false);
    }

    return {
        id, setId, firstName, setFirstName, lastName, setLastName, email, setEmail, lectures, setLectures, login, setLogin, logout,
    }
}, {
    persist: {
        storage: sessionStorage,
        paths: ["id", "firstName", "lastName", "email", "lectures", "login"],
    }
});

export default useUsersStore;
