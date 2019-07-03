export default {
    listaTarefas: state => {
        let lista = state.tarefas.slice()
        return lista
    }   
}