import axios from 'axios';
import { Notify } from 'quasar'

export default {

        create: (dados, dispatch) => {

                return axios.post('http://localhost:9000/tarefa', {

                        titulo_tarefa: dados.titulo_tarefa,
                        descricao_tarefa: dados.descricao_tarefa,
                        importancia_tarefa: dados.importancia_tarefa

                })
                .then(() => {

                        Notify.create({
                                message: 'Tarefa criada com sucesso',
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
