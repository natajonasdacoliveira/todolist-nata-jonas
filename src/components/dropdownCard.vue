<template>


        <q-card bordered class="bg-grey-2">

                <q-card-section>

                        <q-form class="q-gutter-md">

                                <q-input
                                    v-model="tarefa.titulo_tarefa"
                                    label="Titulo"
                                    borderless
                                    maxlength="40"
                                />


                                <q-input
                                    v-model="tarefa.data_registro_tarefa.Time"
                                    label="Data de Criação"
                                    borderless
                                    readonly
                                    disable
                                />


                                <q-input
                                    v-model="tarefa.descricao_tarefa"
                                    label="Descricao"
                                    borderless
                                    autogrow
                                />                                        


                                <q-input
                                    v-model="tarefa.importancia_tarefa"
                                    label="Importância"
                                    borderless
                                />

                            
                        </q-form>

                </q-card-section>

        </q-card>

 

</template>


<script>

import { mapState } from 'vuex';

export default {
    name: 'dropdownCard',
    computed: {
        ...mapState({
            tarefa: 'tarefaSelecionada',
        }),

    }
}
</script>