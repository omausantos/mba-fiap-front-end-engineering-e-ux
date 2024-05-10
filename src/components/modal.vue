<template>
    <div id="shadow" v-if="modalAdd">
        <div id="modal">
            <h3>Adicionar uma tarefa</h3>
            <input type="text" placeholder="Adicionar uma tarefa">
            <input type="text" placeholder="Data de conclusão">
            <footer>
                <button>
                    Salvar
                </button>
                <button @click="modalAddChange()" class="cancel">
                    Cancelar
                </button>
            </footer>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const modalAdd = ref(false);
const modalAddChange = () => {
    modalAdd.value = !modalAdd.value;
}
defineExpose({
    modalAddChange
})
</script>

<style scoped>
#shadow {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #00000096;
    padding: 0 12px;
    display: flex;
    justify-content: center;
    flex-direction: column;
}

#modal {
    padding: 16px;
    background-color: #fff;
    border-radius: 8px;
}

input[type=text] {
    padding: 4px 8px;
    border-radius: 8px;
    border: 1px #91A3AD solid;
    width: calc(100% - 16px);
    margin-bottom: 16px;
}

h3 {
    margin-bottom: 16px;
    text-align: center;
    color: #ED1164;
    font-weight: bold;
}

footer {
    display: flex;
    justify-content: center;
}

button {
    border-radius: 8px;
    background-color: #91A3AD;
    color: #fff;
    font-weight: bold;
    padding: 16px 24px;
    margin: 0 12px;
    text-align: center;
    border: none;
    cursor: pointer;
}

button.cancel {
    background-color: transparent;
    color: #91A3AD;
    font-weight: normal;
    text-decoration: underline;
}
</style>