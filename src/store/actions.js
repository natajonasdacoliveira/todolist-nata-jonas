import getTarefas from '../services/getTarefas'
export default {

    getTarefas({commit}) {
        getTarefas.lista()
        .then(res => {
            commit('SET_TAREFAS', res.data)
        }).catch(err => {
            return
        })
    },

    async setTarefaSelecionada( { commit }, payload ) {

        if(payload == null) {

            commit('SET_TAREFA_SELECIONADA', {
                id_tarefa: null,
                titulo_tarefa: null,
                descricao_tarefa: null,
                data_registro_tarefa: {
                    Time: null,
                    valid: null
                },
                data_execucao_tarefa: {
                    Time: null,
                    valid: null
                },
                importancia_tarefa: null,
            })
            return

        }
        
        commit('SET_TAREFA_SELECIONADA', {
            id_tarefa: payload.id_tarefa,
            titulo_tarefa: payload.titulo_tarefa,
            descricao_tarefa: payload.descricao_tarefa,
            data_registro_tarefa: {
                Time: payload.data_registro_tarefa.Time,
                valid: payload.data_registro_tarefa.valid
            },
            data_execucao_tarefa: {
                Time: payload.data_execucao_tarefa.Time,
                valid: payload.data_execucao_tarefa.valid
            },
            importancia_tarefa: payload.importancia_tarefa,
        })

    }

}