import axios from 'axios';

export default {
        
        delete: (dados, dispatch) => {

                return axios.delete('http://localhost:9000/tarefa/' + dados.id_tarefa).then(res => {

                        dispatch('getTarefas', res.data)

                }).catch(err => {

                        console.log(err)

                })
        }

}