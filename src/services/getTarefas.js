import axios from 'axios';

export default {
    lista: () => {
        return axios.get('http://localhost:9000/tarefas')
    }
}
// import { http } from './api';

// export default {
//     lista: () => {
//         return http.get(`tarefas`)
//     }
// }
