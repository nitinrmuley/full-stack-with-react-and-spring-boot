import axios from 'axios';
import { API_URL } from '../../Constants.js'
//creating constant variable for better references 
export const USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'

class AuthenticationService{
 

            executeBasicAuthenticationService(username, password){
                return axios.get(`${API_URL}/basicauth`,
                 {headers: {authorization: this.createBasicAuthToken(username,password)}})
            }
   
            executeJwtAuthenticationService(username, password){
                console.log('username for nitin test',username)
                return axios.post(`${API_URL}/authenticate`,
                 {
                   username,
                   password

                 })
            }

            registerSucessfulLogin(username,password){
                console.log('registerSucessfulLogin')
                sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME,username)
            this.setupAxiosIntercepters(this.createBasicAuthToken(username,password))  
            }

            registerSucessfulLoginForJwt(username,token){
                sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME,username)
                this.setupAxiosIntercepters(this.createJWTToken(token))  

            }
                     
            createJWTToken(token){
                return 'Bearer ' + token;
            }


            createBasicAuthToken(username,password){
                return 'Basic '+ window.btoa(username + ":" + password)

            }
            logout(){
              sessionStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
            }

            isUserLoggedIn(){
                let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
                 if(user==null) {
                     return false;
                    }else{   
                        return true;
                    } 
            }


            getLoggedInUserName(){
                let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
                 if(user==null) {
                     return '';
                    }else{   
                        return user;
                    } 
            }

            setupAxiosIntercepters(token){
                axios.interceptors.request.use( 
                    (config) => {
                        if(this.isUserLoggedIn){
                        config.headers.authorization = token
                    }
                    return config
                }
                )
            }


 }   


 export default new AuthenticationService()