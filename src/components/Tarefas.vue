<template>

<q-page class="flex">

        <q-list class="full-width" bordered separator padding>
            
                <q-item-label class="text-center text-bold text-black" header>Tarefas</q-item-label>
        

                <q-item v-for="(tarefa, index) in tarefas" :key="index">

                        <q-expansion-item @show="setDropdown(); setTarefaSelecionada(tarefa)" @hide="setDropdown();" class="full-width" switch-toggle-side group="listaTarefas">

                                <template v-slot:header>

                                    <q-item-section>

                                            <q-item-label class="break-word">{{ tarefa.titulo_tarefa }}</q-item-label>

                                    </q-item-section>


                                    <q-item-section side>

                                            <template v-if="tarefa.status_tarefa">

                                                    <q-checkbox class="flex-center" @input="finalizarTarefa(tarefa.status_tarefa, tarefa.id_tarefa)" v-model="tarefa.status_tarefa" color="green" />

                                            </template>


                                            <template v-else>

                                                    <q-checkbox class="flex-center" @input="finalizarTarefa(tarefa.status_tarefa, tarefa.id_tarefa)" v-model="tarefa.status_tarefa" color="gray" />
                                           
                                            </template>

                                    </q-item-section>

                                </template>

                                <template v-if="tarefaSelecionada.titulo_tarefa != null">

                                        <div>

                                                <dropdown-card></dropdown-card> 
                                            
                                        </div>

                                </template>

  

                        </q-expansion-item>

                </q-item>

        </q-list>
  

        <template v-if="dropdownActive">

            <button-footer></button-footer>

        </template>


</q-page>

</template>

<style>

    .break-word {
        word-wrap: break-word
    }

</style>

<script>

import { mapState, mapGetters } from 'vuex'
import buttonFooter from './buttonFooter'
import dropdownCard from './dropdownCard'

export default {

    components: {
        buttonFooter,
        dropdownCard
    },

    data () {
        return {
            dropdownActive: false,
        }
    },

    methods: {  
        setDropdown() {

            if(this.dropdownActive == false) {

                this.dropdownActive = true

            } else {

                this.setTarefaSelecionada(null)

                this.dropdownActive = false

            }

        },
        async setTarefaSelecionada(tarefa) {

            await this.$store.dispatch('setTarefaSelecionada', tarefa)
        },

        finalizarTarefa(status_tarefa, id_tarefa) {

        },

    },
 
    mounted () {
        this.$store.dispatch('getTarefas')
    },
   computed: {
     ...mapState({
         tarefas: 'tarefas',
         tarefaSelecionada: 'tarefaSelecionada'
     }),
     
   } 
}
</script>