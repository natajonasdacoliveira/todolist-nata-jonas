import axios from 'axios';
import { Notify } from 'quasar'

export default {

        update: (dados, dispatch) => {

                return axios.put('http://localhost:9000/tarefa/' + dados.id_tarefa, {

                        titulo_tarefa: dados.titulo_tarefa,
                        descricao_tarefa: dados.descricao_tarefa,
                        importancia_tarefa: dados.importancia_tarefa

                })
                .then(res => {

                        dispatch('getTarefas', res.data)

                        Notify.create({
                                message: 'Tarefa atualizada com sucesso',
                                timeout: 2000
                        })
                })
                .catch(err => {

                        Notify.create({
                                message: 'Erro: ' + err.message,
                                timeout: 7000
                        })

                })
        }

}
