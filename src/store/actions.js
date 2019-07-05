import getTarefas from '../services/getTarefas'
import updateTarefa from '../services/updateTarefa'
import deleteTarefa from '../services/deleteTarefa';

export default {

        async getTarefas( { commit }, tarefas) {

                if(tarefas == false) {

                        let resTarefas = await getTarefas.lista()

                        commit('SET_TAREFAS', resTarefas.data)

                        return
                    
                }

                commit('SET_TAREFAS', tarefas)

        },

        async setTarefaSelecionada( { commit }, tarefa ) {

                if(tarefa == null) {

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

                        id_tarefa: tarefa.id_tarefa,
                        titulo_tarefa: tarefa.titulo_tarefa,
                        descricao_tarefa: tarefa.descricao_tarefa,
                        data_registro_tarefa: {
                            Time: tarefa.data_registro_tarefa.Time,
                            valid: tarefa.data_registro_tarefa.valid
                        },
                        data_execucao_tarefa: {
                            Time: tarefa.data_execucao_tarefa.Time,
                            valid: tarefa.data_execucao_tarefa.valid
                        },
                        importancia_tarefa: tarefa.importancia_tarefa,
                        
                })

        },

        async updateTarefa( { dispatch }, tarefa ) {


                updateTarefa.update(tarefa, dispatch)


        },

        async deleteTarefa( { dispatch }, tarefa ) {


                deleteTarefa.delete(tarefa, dispatch)


        },


        setEstadoDropdown( { commit }, estado) {
            
                commit('SET_ESTADO_DROPDOWN', estado)
            
        },

        setIndexDropdown( { commit }, index) {

                commit('SET_INDEX_DROPDOWN', index)

        }
}