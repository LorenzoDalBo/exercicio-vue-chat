<script setup>
    import { ref } from 'vue'

    let msgs = ref( [] )
    let msg = ref('')

    function mandaMsg() {
        msgs.value.push(
            {
                id: geraId(),
                mensagem: msg.value,
                pessoa: 'cliente'
            }
        )
        msg.value = ""
    }


    function geraId() {
        return Math.random().toString(36).substr(2, 9);
    }

</script>

<template>
    <div class="flex w-screen h-screen justify-center bg-black">
        <div class="flex flex-col justify-center w-1/2">    
            <header class="flex bg-cor-fundo p-2 text-2xl border-x-4 border-solid border-cor-primaria border-y-4 rounded-t-3xl">
                <h1 class="bg-cor-chat text-cor-texto p-3 border-solid border-4 rounded-full border-cor-secundaria">Atendimento On-line</h1>
            </header>
            <main class="overflow-auto h-1/2 max-h-max bg-cor-chat flex flex-col border-cor-primaria border-x-4 border-solid">
                <div v-for="mensagem in msgs" :key="mensagem.id" class="">
                    <div v-if="mensagem.pessoa === 'atendente'" class="">
                        <h2>Atendente</h2>
                        <p>{{ mensagem.mensagem }}</p>
                    </div>
                    <div v-else class="flex justify-end">
                        <div class="w-1/2">
                            <h2 class="">Você</h2>
                            <p class="">{{ mensagem.mensagem }}</p>
                        </div>
                    </div>
                </div>
            </main>
            <footer class="flex bg-cor-fundo p-2 rounded-b-3xl border-cor-primaria border-solid border-4">
                <input v-model="msg" class='w-10/12 focus:outline-none rounded-full flex p-2 border-solid border-cor-destaque border-4'>
                <button @click="mandaMsg" class="w-2/12 hover:active:bg-cor-destaque hover:active:border-cor-primaria hover:duration-500 hover:bg-cor-hover ml-2 bg-cor-secundaria p-2 border-4 border-solid border-cor-destaque rounded-full">ENVIAR</button>
            </footer>
        </div>
    </div>
</template>

<style scoped>
    
</style>