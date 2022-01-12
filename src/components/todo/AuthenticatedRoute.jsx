
//this class is used to authenticate the router component if user is logged in then only it will redirect

import React,{Component} from 'react';
import {Route, Redirect} from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js'
// the url to specific component
class  AuthenticatedRoute extends Component{
    render(){
        if(AuthenticationService.isUserLoggedIn()){
           return <Route {...this.props} />  //this is taken all the parameters which is passed to this route i.e take all the properties and sprewad them out (spread operator)
        }
        else{
            return <Redirect to ="/login" />
        }
    }
}
export default AuthenticatedRoute