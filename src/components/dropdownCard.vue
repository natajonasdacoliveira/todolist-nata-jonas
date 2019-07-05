<template>


        <q-card bordered class="bg-grey-2">

                <q-card-section>

                        <q-form class="q-gutter-md">

                        <q-item-label class="text-center text-grey" >Altere e salve os valores para editar</q-item-label>    

                                <q-input
                                    v-model="tarefa.titulo_tarefa"
                                    label="Titulo"
                                    borderless
                                    maxlength="40"
                                />


                                <q-input
                                    v-model="tarefa.descricao_tarefa"
                                    label="Descricao"
                                    borderless
                                    autogrow
                                />      


                                <q-item-label class="text-center text-grey" >Importância da tarefa</q-item-label>    


                                <q-option-group
                                    v-model="tarefa.importancia_tarefa"
                                    :options="options"
                                    color="primary"
                                    inline
                                    dense
                                />


                                <q-input
                                    v-model="tarefa.data_registro_tarefa.Time"
                                    label="Data de Criação"
                                    borderless
                                    readonly
                                    disable
                                />
                            
                        </q-form>

                </q-card-section>

        </q-card>

 

</template>


<script>

import { mapState } from 'vuex';

export default {
    name: 'dropdownCard',
    data() {
        return {
            options: [
        {
          label: 'Pouco',
          value: 1,
        },
        {
          label: 'Relevante',
          value: 2,
        },
        {
          label: 'Vital',
          value: 3
        }
      ]
        }
    },
    computed: {
        ...mapState({
            tarefa: 'tarefaSelecionada',
        }),

    }
}
</script>