// import axios from 'axios'

// export default() => {
//     return axios.create({
//         withCredentials: false,
//         headers: {

//         }
//     })
// }

import axios from 'axios';


export const HTTP = axios.create({

        baseURL: `http://localhost:9000/`,

        headers: {

                'Accept': 'application/json',
                'Content-Type': 'application/json'
            
        }
})