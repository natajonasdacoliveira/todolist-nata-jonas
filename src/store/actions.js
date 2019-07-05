import getTarefas from '../services/getTarefas'
import updateTarefa from '../services/updateTarefa'
import deleteTarefa from '../services/deleteTarefa';

export default {

    async getTarefas({commit}, payload) {

        if(payload == false) {

            let res = await getTarefas.lista()
            commit('SET_TAREFAS', res.data)
            return
            
        }

        commit('SET_TAREFAS', payload)

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

    },

    async updateTarefa( { dispatch }, payload ) {


        updateTarefa.update(payload, dispatch)


    },

    async deleteTarefa( { dispatch }, payload ) {


        deleteTarefa.delete(payload, dispatch)


    },


    setEstadoDropdown({commit}, estado) {
        commit('SET_ESTADO_DROPDOWN', estado)
    },

    setIndexDropdown({commit}, index) {
        commit('SET_INDEX_DROPDOWN', index)
    }
}