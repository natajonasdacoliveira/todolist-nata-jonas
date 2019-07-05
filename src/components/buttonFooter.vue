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
                                                @click="deletar">

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


import { mapGetters, mapState } from 'vuex';

import setDropdowndata from '../mixin'

export default {

        name: 'buttonFooter',
        props: {
            tarefasRef: {}
        },
        mixins: [setDropdowndata],
        computed: {

                ...mapState({

                        tarefaSelecionada: 'tarefaSelecionada',
                        indexExpandDrop: 'indexExpandDrop'

                })    

        },

        methods: {

            confirm(mensagem, action) {

                    this.$q.dialog({

                            title: 'Confirme',
                            message: mensagem,
                            cancel: true,

                    }).onOk(() => {

                        // this.$store.dispatch('setDropdownActive', false)

                            switch (action) {

                                case 'alterar':
                                    this.tarefasRef.expansionItem[this.indexExpandDrop].hide()

                                    this.$store.dispatch('updateTarefa', this.tarefaSelecionada)

                                    this.setDropdowndata(null, false, -1)
                                    
                                    break;

                                case 'deletar':

                                    this.tarefasRef.expansionItem[this.indexExpandDrop].hide()

                                    this.$store.dispatch('deleteTarefa', this.tarefaSelecionada)

                                    this.setDropdowndata(null, false, -1)
                                break;

                                default:

                                    break;

                            }
                    }).onCancel(() => {
                    }).onDismiss(() => {
                    })
            },
            alterar() {


                this.confirm('Deseja alterar a Tarefa?', 'alterar')


            },
            deletar() {

                this.confirm('Deseja deletar a Tarefa?', 'deletar')


            }

        },
}
</script>