<template>
    <div id="body">
        <header>
            <img src="./../assets/mini-logo-fiap.svg" class="logo fiap" alt="FIAP logo" />
            <div>
                Olá, Rafael <img src="./../assets/exit.svg" alt="Sair do Sistema" />
            </div>
        </header>
        <div id="container">
            <header>
                Tarefas <img src="./../assets/filtro.svg" alt="Pesquisar Tarefas" />
            </header>
            <div>
                <div id="sem-tarefas">
                    <img src="./../assets/man.png" alt="Nenhuma Tarefa Encontrada" />
                    <p>Você ainda não possui tarefas cadastradas!</p>
                </div>
            </div>
        </div>
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
    padding: 12px;
    display: flex;
    flex-direction: column;
}

#container>header {
    display: flex;
    justify-content: space-between;
    background-color: #ededed;
    border-radius: 8px;
    align-items: center;
    padding: 0 8px;
}
#container>div {
    flex-grow: 1;
    display: flex;
    align-items: center;
}


#body>header {
    border-bottom: solid 1px #91A3AD;
    padding: 24px 12px;
    display: flex;
    justify-content: space-between;
}

#body>header div {
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

#sem-tarefas {
    text-align: center;
    width: 100%;
}
#sem-tarefas p {
    margin-top: 8px;
}
</style>