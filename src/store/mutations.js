export default {


        SET_TAREFAS(state, tarefas) {

                state.tarefas = tarefas;

        },

        SET_TAREFA_SELECIONADA(state, tarefa) {

                state.tarefaSelecionada = tarefa;

        },

        SET_ESTADO_DROPDOWN(state, estado) {

                state.estadoDropdown = estado

        },
        
        SET_INDEX_DROPDOWN(state, index) {

                state.indexExpandDrop = index

        }
}