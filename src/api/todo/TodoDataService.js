
import axios from 'axios'
import { API_URL , JPA_API_URL} from '../../Constants'
class TodoDataService{

    retrieveAllTodos(name){
        //below axios returns the promise back so we will handle in welcomecompinet call for this
       // return axios.get(`${API_URL}/users/${name}/todos`)
       //getting from JPA DB service
       return axios.get(`${JPA_API_URL}/users/${name}/todos`)
    }

    retrieveTodo(name,id){
        //below axios returns the promise back so we will handle in welcomecompinet call for this
        return axios.get(`${JPA_API_URL}/users/${name}/todos/${id}`)
    }


    deleteTodo(name,id){
        return axios.delete(`${JPA_API_URL}/users/${name}/todos/${id}`)
    }

    
    updateTodo(name,id,todo){
        return axios.put(`${JPA_API_URL}/users/${name}/todos/${id}`,todo)
    }
    
    createTodo(name,todo){
        return axios.post(`${JPA_API_URL}/users/${name}/todos/`,todo)
    }

}
export default new TodoDataService()