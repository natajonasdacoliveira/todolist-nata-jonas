<template>

        <div>
                <q-footer class="bg-brown-6" elevated>

                        <q-toolbar>

                                <div class="q-pa-md full-width">

                                        <div class="q-gutter-x-xl" align="center">

                                            <q-btn
                                                class="bg-brown-1 shadow-24"
                                                dense
                                                round
                                                aria-label="Deletar Tarefa"
                                                @click="alterar">

                                                <q-icon name="delete" class="text-red"></q-icon>

                                            </q-btn>

                                            <q-btn
                                                class="bg-brown-1 shadow-24"
                                                dense
                                                round
                                                aria-label="Alterar Tarefa"
                                                @click="alterar">

                                                <q-icon name="done" color="green"></q-icon>

                                            </q-btn>

                                        </div>

                                </div>

                            
                        </q-toolbar>

                </q-footer>        

        </div>

</template>

<script>
import { mapGetters } from 'vuex';
export default {

    name: 'buttonFooter',

    data() {
        return {
            
        }
    },

    computed: {
        ...mapGetters({
            tarefaSelecionada: 'tarefaSelecionada'
        })    
    },

    methods: {

        alterar(id_tarefa, titulo_tarefa, descricao_tarefa, importancia_tarefa) {

            if(this.tarefaSelecionada != null) {

                console.log(this.tarefaSelecionada.titulo_tarefa)

            }

        },
        deletar(id_tarefa) {

        }

    },
}
</script>