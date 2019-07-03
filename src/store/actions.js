import getTarefas from '../services/getTarefas'
export default {
    getTarefas({commit}) {
        getTarefas.lista()
        .then(res => {
            commit('SET_TAREFAS', res.data)
        }).catch(err => {
            return
        })
    }
}