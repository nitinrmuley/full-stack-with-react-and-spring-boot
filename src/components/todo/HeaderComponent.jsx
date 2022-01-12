import react,{Component} from 'react'
import {Link} from  'react-router-dom'
import AuthenticationService from './AuthenticationService.js'
import { withRouter } from 'react-router';
class HeaderComponent extends Component{
    render(){
           //calling islogin method from Authservice.js file
           const isUserLoggedIn= AuthenticationService.isUserLoggedIn();
           console.log(isUserLoggedIn);
        
           return(
             <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="#" className="navbar-brand">in28minutes</a></div>
                    <ul className="navbar-nav">
                        {isUserLoggedIn && <li> < Link className="nav-link" to="/welcome/in28minutes">Home</Link></li>}
                        {isUserLoggedIn && <li> <Link className="nav-link" to="/todos">Todos</Link></li>}
                     </ul>   
                     <ul className="navbar-nav navbar-collapse justify-content-end ">
                        //below only shows when is user is not logged in 
                        {!isUserLoggedIn && <li> <Link className="nav-link" to="/login">Login</Link></li>}
                        {isUserLoggedIn && <li> <Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                     </ul>    
                </nav>    
             </header>

        )
    }
}
export default withRouter(HeaderComponent);
