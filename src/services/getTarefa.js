import Api from './api'

export default {
    
        lista () {

                return Api.get('/tarefas')
                
        }

}
