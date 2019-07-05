import axios from 'axios';

export default {

        create: (dados, dispatch) => {

                return axios.post('http://localhost:9000/tarefa', {

                        titulo_tarefa: dados.titulo_tarefa,
                        descricao_tarefa: dados.descricao_tarefa,
                        importancia_tarefa: dados.importancia_tarefa

                })
                .then(() => {



                })
                .catch(err => {

                        console.log(err)

                })
        }

}
