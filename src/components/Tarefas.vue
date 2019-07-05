<template>

        <q-page class="flex">

                <q-list class="full-width" bordered separator padding>

                        <q-item-label class="text-center text-bold text-black" header>Tarefas</q-item-label>    


                        <q-item v-for="(tarefa, index) in tarefas" :key="index">

                                <q-expansion-item ref="expansionItem" @click="setDropdown(index, tarefa);" class="full-width" switch-toggle-side group="listaTarefas">

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


                <template v-if="estadoDropdown">

                        <button-footer :tarefasRef="this.$refs"></button-footer>

                </template>

        </q-page>

</template>

<style>

        .break-word {
                word-wrap: break-word
        }

</style>

<script>

import { mapState, mapGetters, mapActions } from 'vuex'

import buttonFooter from './buttonFooter'
import dropdownCard from './dropdownCard'
import setDropdowndata from '../mixin'


export default {

        name: 'Tarefas',

        components: {
                buttonFooter,
                dropdownCard
        },
        
        mixins: [setDropdowndata],

        methods: {  

                setDropdown(index, tarefa) {

                        if(this.indexDropdownSelecionado == -1) {

                            this.setDropdowndata(tarefa, true, index)
                            

                            this.$refs.expansionItem[index].show()

                            return

                        } else if(this.indexDropdownSelecionado == index) {

                            this.setDropdowndata(null, false, -1)


                            this.$refs.expansionItem[index].hide()

                            return

                        } else if(this.indexDropdownSelecionado != index) {

                            this.setDropdowndata(null, false, -1)
    
                            this.setDropdown(index, tarefa)

                            return

                        } 

                },

                finalizarTarefa(status_tarefa, id_tarefa) {

                },

        },
    
        created() {

                this.$store.dispatch('getTarefas', false)

        },

        computed: {

                ...mapState({

                        tarefas: 'tarefas',
                        tarefaSelecionada: 'tarefaSelecionada',
                        estadoDropdown: 'estadoDropdown',
                        indexDropdownSelecionado: 'indexExpandDrop'

                }),
                // ...mapActions({
                //     setDropdownActive: 'setDropdownActive',
                //     getTarefasList: 'getTarefas'
                // })
        },
        destroyed() {

                this.setDropdowndata(null, false, -1)

        },
}
</script>