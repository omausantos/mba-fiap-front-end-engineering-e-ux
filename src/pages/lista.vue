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
                <ul id="lista-tarefas">
                    <li v-for="(tarefa, i) in tarefas" :key="i">
                        <div class="btn">
                            <input type="radio" name="" id="">
                        </div>
                        <div class="descricao">
                            <h3>
                                {{tarefa.title}}
                            </h3>
                            <p>
                                Conclusão em: {{tarefa.completed_at}}
                            </p>
                        </div>
                    </li>
                </ul>
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
import { defineComponent, onMounted, ref } from 'vue';
import api from "./../services/api";

export default defineComponent({
    name: "Lista",
    setup() {
        const tarefas = ref([]);

        const fetchTarefas = () => api.get("").then((response) => {
            tarefas.value = response.data;
        });

        onMounted(fetchTarefas);

        return {
            tarefas
        }
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

#container>div {}

#lista-tarefas li {
    display: flex;
    justify-content: space-between;
    background-color: #ededed;
    border-radius: 8px;
    align-items: center;
    color: #575757;
    font-size: 0.8rem;
    padding: 8px;
    margin: 8px 0;
}

#lista-tarefas li .btn {
    padding-right: 8px;
}

#lista-tarefas li .descricao {
    flex-grow: 1;
    line-height: 1.3rem;
}

#lista-tarefas li .descricao h3 {
    font-weight: bold;
}

#lista-tarefas li.ok .descricao h3 {
    text-decoration: line-through;
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