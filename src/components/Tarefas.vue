<template>

<q-page class="flex">

    <q-list class="full-width" bordered padding>
        
      <q-item-label class="text-center" header>Tarefas</q-item-label>

        <q-item v-for="(tarefa, index) in tarefas" :key="index" >
            <q-item-section>
                <q-item-label>{{tarefa.titulo_tarefa}}</q-item-label>
                <q-item-label caption></q-item-label>   
            </q-item-section>

            <q-item-section side center>

                <template v-if="tarefa.status_tarefa">
                    <q-checkbox class="flex-center" @input="finalizarTarefa(tarefa.status_tarefa, tarefa.id_tarefa)" v-model="tarefa.status_tarefa" color="green" />

                </template>
                <template v-else>
                    <q-checkbox class="flex-center" @input="finalizarTarefa(tarefa.status_tarefa, tarefa.id_tarefa)" v-model="tarefa.status_tarefa" color="gray" />
                </template>

            </q-item-section>

      </q-item>
      
      <q-separator bordered inset />


    </q-list>

</q-page>

</template>

<style>



</style>

<script>
import getTarefas from '../services/getTarefas'

export default {
  name: 'Tarefas.vue',
    data() {
        return {
            tarefas: Array,
        };

    },
    props: {
    },
    methods: {
        finalizarTarefa(status_tarefa, id_tarefa) {
            console.log(status_tarefa, id_tarefa)
        }
    },
    mounted() {

        getTarefas.lista()
        .then(res => {
            this.tarefas = res.data
        }).catch(err => {
            console.log(err)
        })

    },

}
</script>