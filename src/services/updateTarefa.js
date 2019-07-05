import axios from 'axios';

export default {

        update: (dados, dispatch) => {

                return axios.put('http://localhost:9000/tarefa/' + dados.id_tarefa, {

                        titulo_tarefa: dados.titulo_tarefa,
                        descricao_tarefa: dados.descricao_tarefa,
                        importancia_tarefa: dados.importancia_tarefa

                })
                .then(res => {

                        dispatch('getTarefas', res.data)

                })
                .catch(err => {

                        console.log(err)

                })
        }

}
