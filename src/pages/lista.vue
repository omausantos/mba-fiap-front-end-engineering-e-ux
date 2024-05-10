<template>
    <div id="body">
        <header>
            <img src="./../assets/mini-logo-fiap.svg" class="logo fiap" alt="FIAP logo" />
            <div>
                Olá, Rafael <img src="./../assets/exit.svg" alt="Sair do Sistema" />
            </div>
        </header>
        <div id="container">CONTAINER</div>
        <footer>
            <button>
                <img src="./../assets/more.svg" alt="Adicionar Tarefa" /> Adicionar uma tarefa
            </button>
        </footer>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {


        return {}
    }
})
</script>

<style scoped>
#body {
    color: #ED1164 !important;
    display: flex;
    flex-direction: column;
    width: 100%;
    position: fixed;
    bottom: 0;
    top: 0;
}

#container {
    flex-grow: 1;
}

header {
    border-bottom: solid 1px #91A3AD;
    padding: 24px;
    display: flex;
    justify-content: space-between;
}

header div {
    display: flex;
    align-items: center;
}

header div img {
    margin-left: 8px;
}

footer {
    display: flex;
    justify-content: center;
    padding-bottom: 12px;
}
footer button {
    cursor: pointer;
    border: none;
    background-color: #d4d4d4;
    color: #ED1164;
    border-radius: 8px;
    display: flex;
    align-items: center;
    padding: 8px;
    width: calc(100% - 24px);
}
footer button img {
    margin-right: 12px;
}
</style>