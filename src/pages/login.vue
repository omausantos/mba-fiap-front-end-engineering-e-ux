<template>
    <div>
        <div id="app">
            <form action="#">
                <img src="./../assets/logo-fiap.svg" class="logo fiap" alt="FIAP logo" />
                <div class="fields">
                    <label v-bind:class="cssClass">{{ message }}</label>
                    <div class="field">
                        <i class="pi pi-envelope" style="color: hsl(334, 82%, 51%);"></i>
                        <input type="text" class="email" v-model="username" placeholder="rafael@verzel.com.br">
                    </div>
                    <div class="field">
                        <div class="password-container">
                            <i class="pi pi-lock" style="color: hsl(334, 82%, 51%);"></i>
                            <input class="input" v-model="password" :type="showPassword ? 'text' : 'password'"
                                placeholder="Senha">
                            <span @click="togglePasswordVisibility" class="password-toggle">
                                <i :class="showPassword ? 'pi pi-eye-slash' : 'pi pi-eye'"></i>
                            </span>
                        </div>
                    </div>
                    <div class="form-footer">
                        <a href="#" class="reset"></a>
                        <button type="submit" @click="postUser" :disabled='isButtonDisabled'>Login</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script lang="ts">
import 'primeicons/primeicons.css'
import api from "./../services/api";
import { useRouter } from 'vue-router';

export default {
    data() {
        return {
            username: "",
            password: "",
            message: "",
            cssClass: "",
            showPassword: false
        }
    },
    computed: {
        isButtonDisabled() {
            return !this.username || !this.password || !this.isValidEmail(this.username);
        }
    },
    methods: {
        togglePasswordVisibility() {
            this.showPassword = !this.showPassword;
        },
        isValidEmail(email: any) {
            const emailRegex = /^[a-zA-Z0-9._-]+@verzel.com.br$/;
            return emailRegex.test(email);
        },
        postUser() {
            api
                .post("/login", { username: this.username, password: this.password })
                .then((response) => {
                    this.message = response.data.message
                    this.cssClass = "green";

                    this.$router.push('/lista');
                })
                .catch((error) => {
                    this.message = error.response.data.error
                    console.log(this.message);
                    this.cssClass = "red";
                });
        }
    }
}

</script>

<style scoped>
#app {
    /* margin-top: 10px; */
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

#app form {
    padding: 30px 20px;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
    background: rgba(255, 255, 255, 0.9);
    border: 1px solid #fff;
    color: #000030;
}

#app .fields {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    margin-top: 50px;
}

#app .fields .field {
    margin-bottom: 15px;
    clear: both;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
}

#app .fields button:disabled {
    background-color: gray;
}

#app .fields button {
    background: hsl(334, 82%, 51%);
    color: #fff;
    font-weight: bold;
    width: 100%;
    border: none;
    height: 30px;
    border-radius: 8px;
    margin-left: auto;
    height: 40px;
}

.input {
    margin-left: 8px;
    padding: 8px 12px;
    margin-right: 10px;
    border-top: none;
    border-left: none;
    border-right: none;
    align-items: center;
}

.email {
    margin-left: 8px;
    padding: 8px 12px;
    margin-right: 10px;
    border-top: none;
    border-left: none;
    border-right: none;
    align-items: center;
}

.password-container {
    display: flex;
    align-items: center;
}

.password-container input {
    margin-right: 0px;
}

.password-toggle {
    flex: 1;
}
</style>