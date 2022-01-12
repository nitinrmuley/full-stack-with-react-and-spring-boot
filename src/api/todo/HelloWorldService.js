import axios from "axios"

class HelloWorldService{

    executeHelloWorldService(){
        //below axios returns the promise back so we will handle in welcomecompinet call for this
        return axios.get('http://localhost:8080/hello-world')
    }
    
    executeHelloWorldBeanService(){
        //below axios returns the promise back so we will handle in welcomecompinet call for this
        return axios.get('http://localhost:8080/hello-world-bean')
    }
    
    executeHelloWorldPathVariableService(name){
        //remember we used tick character not single quote below
        //commenting below all lines because we used interceptor in authenticationService
        //let username='in28minutes'
       // let password='dummy'
        //let basicAuthHeader='Basic '+ window.btoa(username + ":" + password)
        return axios.get(`http://localhost:8080/hello-world/path-variable/${name}`
        //,
        //{
          //  headers:{
            //    authorization:basicAuthHeader
            //}
        //}
        )
    }
}
export default new HelloWorldService()