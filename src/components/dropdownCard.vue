<template>
  <q-card bordered class="bg-grey-2">
    <q-card-section>
      <q-form class="q-gutter-md">
        <q-item-label class="text-center text-grey">Altere e salve os valores para editar</q-item-label>

        <div class="q-pl-md">
          <q-input v-model="tarefa.titulo_tarefa" label="Titulo" borderless maxlength="40" />
        </div>
        <div class="q-pl-md">
          <q-input v-model="tarefa.descricao_tarefa" label="Descricao" borderless autogrow />
        </div>

        <div class="q-pl-xl q-pr-xl q-pt-md">
          <q-slider
            v-model="tarefa.importancia_tarefa"
            :min="1"
            :max="3"
            :step="1"
            label
            :label-value="sliderValue"
            label-always
            color="brown"
          />
        </div>

        <div class="row justify-between">
          <q-input
            v-model="tarefa.data_registro_tarefa.Time"
            label="Data/Hora de Criação"
            borderless
            readonly
            disable
          />

          <q-input
            v-if="tarefa.data_execucao_tarefa.valid == true"
            v-model="tarefa.data_execucao_tarefa.Time"
            label="Data/Hora de Execucao"
            borderless
            readonly
            disable
          />
        </div>
      </q-form>
    </q-card-section>
  </q-card>
</template>


<script>
import { mapState } from "vuex";

export default {
  name: "dropdownCard",

  data() {
    return {};
  },

  computed: {
    ...mapState({
      tarefa: "tarefaSelecionada"
    }),

    sliderValue() {
      switch (this.tarefa.importancia_tarefa) {
        case 1:
          return "Pouco Importante";

          break;
        case 2:
          return "Relevante";

          break;
        case 3:
          return "Vital";

          break;

        default:
          break;
      }
    }
  }
};
</script>