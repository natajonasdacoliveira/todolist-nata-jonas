<template>
  <q-page class="flex-center">
    <div class="q-pa-md">
      <q-form class="q-gutter-md">
        <div class="q-pl-sm q-pr-sm">
          <q-input v-model="tarefa.titulo_tarefa" label="Título da Tarefa" />
        </div>

        <div class="q-pl-sm q-pr-sm">
          <q-input v-model="tarefa.descricao_tarefa" autogrow label="Descrição da Tarefa" />
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

        <div class="q-pl-sm q-pr-sm">
          <q-btn
            class="full-width text-center"
            label="Adicionar Tarefa"
            @click="registrarTarefa()"
            type="button"
            color="green"
          />
        </div>
      </q-form>
    </div>
  </q-page>
</template>


<script>
export default {
  name: "registroTarefa",

  data() {
    return {
      tarefa: {
        titulo_tarefa: "",

        descricao_tarefa: "",

        importancia_tarefa: 1
      }
    };
  },
  methods: {
    async registrarTarefa() {
      await this.$store.dispatch("createTarefa", this.tarefa);
      this.$router.push({ path: '/tarefas'})

    }
  },
  computed: {
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