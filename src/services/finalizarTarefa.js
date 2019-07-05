import axios from 'axios';
import { Notify } from 'quasar'

export default {

        finalizar: (id_tarefa, dispatch) => {

                return axios.put('http://localhost:9000/finalizar/' + id_tarefa)
                .then(res => {
                        dispatch('getTarefas', res.data)
                })
                .catch(err => {

                        Notify.create({
                                message: 'Erro: ' + err.message,
                                timeout: 7000
                        })


                })
        }

}