import axios from 'axios';
import { Notify } from 'quasar'

export default {
        
        delete: (dados, dispatch) => {

                return axios.delete('http://localhost:9000/tarefa/' + dados.id_tarefa)
                .then(res => {
                        
                        dispatch('getTarefas', res.data)

                        Notify.create({
                                message: 'Tarefa deletada com sucesso',
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