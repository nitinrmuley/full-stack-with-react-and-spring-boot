import React,{Component} from 'react';
import AuthenticationService from './AuthenticationService.js'


class LoginComponent extends Component{
   //here state added to change the values of proprties when we are entering values in textbox it changes
    constructor(props){
      super(props)
      this.state ={
          username: 'in28minutes',
          password: '',
          hasLoginFailed:false,
          showSucessMessage:false
      }
     //this.handleUsernameChange= this.handleUsernameChange.bind(this);
     //this.handlePasswordChange= this.handlePasswordChange.bind(this);
      this.handleChange=this.handleChange.bind(this);
       this.loginClicked=this.loginClicked.bind(this);
    }
    //dynamically chnage the username and password this is generic for both username and passwprd
    handleChange(event){
        console.log(this.state);
        this.setState(
          {
             [event.target.name]:event.target.value
          }
 
        )
     }



   //event.target.name is variable value for username field therefore use [] below
    //handleUsernameChange(event){
       //console.log(event.target.name);
       //this.setState(
        // {
          //  [event.target.name]:event.target.value
        // }

       //)
    //}
   
   // handlePasswordChange(event){
      //  this.setState(
         //   {password:event.target.value}
       // )
    //}

    loginClicked(){
      console.log('login clicked')
    console.log(this.state)
      //if(this.state.username==='in28minutes' && this.state.password==='dummy')
        //{
          //  AuthenticationService.registerSucessfulLogin(this.state.username,this.state.password)
          //  this.props.history.push(`/welcome/${this.state.username}`)
        // this.setState({showSucessMessage:true})
        // this.setState({hasLoginFailed:false})
       // }
      //else{
        //this.setState({hasLoginFailed:true})
        //this.setState({showSucessMessage:false})    
        //}
        //here we are checking authentication from service that we created as below
       
       // AuthenticationService.executeBasicAuthenticationService(this.state.username,this.state.password)
        //.then(
          //  () => {
            //  AuthenticationService.registerSucessfulLogin(this.state.username,this.state.password)
             // this.props.history.push(`/welcome/${this.state.username}`)
           // }
        //).catch( () => 
        //{
       // this.setState({hasLoginFailed:true})
        //this.setState({showSucessMessage:false}) 
        //}
        //)

        //below using JWT auth service

        AuthenticationService.executeJwtAuthenticationService(this.state.username,this.state.password)
        .then(
            (response) => {
              AuthenticationService.registerSucessfulLoginForJwt(this.state.username,response.data.token)
              this.props.history.push(`/welcome/${this.state.username}`)
            }
        ).catch( () => 
        {
        this.setState({hasLoginFailed:true})
        this.setState({showSucessMessage:false}) 
        }
        )

        
    }
    render(){
        return(
          <div>
               <h1>Login</h1>
               <div className="container">
               {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
               {this.state.showSucessMessage && <div>Login Sucessful</div>}
                User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                Password: <input type="password" name="password"value={this.state.password} onChange={this.handleChange}/>
                <button className="btn btn-success"onClick={this.loginClicked}>Login</button>
             </div>
          </div>
        )
    }

}

export default LoginComponent