export default {
    listaTarefas: state => {
        let listaTarefas = state.tarefas.slice()
        return listaTarefas
    },

    tarefaSelecionada: state => {
        return state.tarefaSelecionada;
    }
}
