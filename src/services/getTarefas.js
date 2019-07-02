import axios from 'axios';

export default {
    lista: () => {
        return axios.get('http://localhost:9000/tarefas')
    }
}
