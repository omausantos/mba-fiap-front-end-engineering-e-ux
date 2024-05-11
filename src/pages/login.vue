<template>
    <div>
        <div id="app">
            <form action="#">
                <img src="./../assets/logo-fiap.svg" class="logo fiap" alt="FIAP logo" />
                <div class ="fields">
                    <label v-bind:class="cssClass">{{message}}</label>
                    <div class ="field">
                        <i class="pi pi-envelope" style="color: hsl(334, 82%, 51%);"></i>
                        <input type="text" class="email" v-model="username"  placeholder="rafael@verzel.com.br">
                    </div>
                    <div class ="field">
                        <div class="password-container">
                            <i class="pi pi-lock" style="color: hsl(334, 82%, 51%);"></i>
                            <input class="input" v-model="password" :type="showPassword ? 'text' : 'password'" placeholder="Senha">
                            <span @click="togglePasswordVisibility" class="password-toggle">
                                <i :class="showPassword ? 'pi pi-eye-slash' : 'pi pi-eye'"></i>
                            </span>
                        </div>
                    </div>
                    <div class="form-footer"> 
                        <a href="#" class="reset" ></a>
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

    export default {
        data(){
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
        }},
        methods:{
            togglePasswordVisibility(){
                this.showPassword = !this.showPassword;
            },
            isValidEmail(email: any) {
                const emailRegex = /^[a-zA-Z0-9._-]+@verzel.com.br$/;
                return emailRegex.test(email);
            },
            postUser() {
                api
                .post("/login", {username: this.username, password: this.password})
                .then((response) => {
                 this.message = response.data.message
                 this.cssClass = "green";
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