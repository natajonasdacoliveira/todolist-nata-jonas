export default {
    SET_TAREFAS(state, tarefas) {
        state.tarefas = tarefas;
    },

    async SET_TAREFA_SELECIONADA(state, tarefa) {

         state.tarefaSelecionada = tarefa;

    }
}