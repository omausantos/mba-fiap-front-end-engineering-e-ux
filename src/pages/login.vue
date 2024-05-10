<template>
    <div>
        <div id="app">
            <form action="#">
                <img src="./../assets/logo-fiap.svg" class="logo fiap" alt="FIAP logo" />
                <div class ="fields">
                    <div class ="field">
                        <i class="pi pi-envelope" style="color: hsl(334, 82%, 51%);"></i>
                        <input type="text" class="input" placeholder="Email">
                    </div>
                    <div class ="field">
                        <i class="pi pi-lock" style="color: hsl(334, 82%, 51%);"></i>
                    <input type="password" name="" class="input" placeholder="Senha">
                    </div>
                    <div class="form-footer">
                        <a href="#" class="reset" ></a>
                        <button type="button">Login</button>
                    </div>
                </div>   
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
    import 'primeicons/primeicons.css'
</script>

<style scoped>
button{
    background-color: pink;
}
</style>