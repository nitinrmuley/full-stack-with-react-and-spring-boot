import react,{Component} from 'react'
import {Link} from  'react-router-dom'
import HelloWorldService from '../../api/todo/HelloWorldService.js'

class WelcomeComponent extends Component{
    constructor(props){
          super(props)
          this.retriveWelcomeMessage=this.retriveWelcomeMessage.bind(this)
          this.state={
              WelcomeMessage:''
          }
          this.handleSucessfulResponse=this.handleSucessfulResponse.bind(this)
          this.handleError=this.handleError.bind(this)

    }
    render(){
        return(
           <>
            <h1>Welcome!</h1>
             <div className="container">
              {this.props.match.params.name}. you can manage your todos <Link to="/todos">here</Link>
            </div>
            <div className="container">
                Click here to get customized welcome message
                <button onClick={this.retriveWelcomeMessage} 
                   className="btn btn-success">Get welcome Message </button>
             </div>
             <div className="container">
               <i>{this.state.WelcomeMessage}</i> 
             </div>
           
           </>
        )
    }

    retriveWelcomeMessage(){
        //handling promise
        //HelloWorldService.executeHelloWorldService()
        //.then(response => this.handleSucessfulResponse(response))
        //HelloWorldService.executeHelloWorldBeanService()
        // .then(response => this.handleSucessfulResponse(response))
        HelloWorldService.executeHelloWorldPathVariableService(this.props.match.params.name)
        .then(response => this.handleSucessfulResponse(response))
         .catch(error =>this.handleError(error))
    }
    handleSucessfulResponse(response){
        console.log(response)
        this.setState({WelcomeMessage: response.data})
    }
    handleError(error){
        console.log(error)
        let errorMessage='';

        if(error.message)
        errorMessage +=error.message
        
        if(error.response && error.response.data)
        errorMessage +=error.response.data.message

        this.setState({WelcomeMessage:errorMessage})
    }
}

export default WelcomeComponent