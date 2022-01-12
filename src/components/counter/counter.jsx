import React, { Component } from 'react';
import PropTypes from 'prop-types'
//import css file
import './Counter.css'

class Counter extends Component{

  constructor(){
    super();
    this.state = {
      counter : 0 
     }
     this.increment = this.increment.bind(this);
     this.decrement = this.decrement.bind(this);
     this.reset = this.reset.bind(this);
   }
  render() {
    return (
              //calling child class increment method from parent
      <div className="counter">
      <CounterButton by={1} incrementMethod={this.increment} decrementMethod={this.decrement}/>
      <CounterButton by={5} incrementMethod={this.increment} decrementMethod={this.decrement}/>
      <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement}/>
      <span className="count">{this.state.counter}</span>
      <div><button className="reset" onClick={this.reset}>Reset</button></div>
      </div> 
    );
  }
  
  reset(){
    this.setState({counter: 0});
  }
  
  increment(by) { 
   // console.log(`increment from child - ${by}`)
    this.setState(
     (prevState)=> {
       return{counter: prevState.counter + by}
     }
     );
  }
  
  decrement(by) { 
    // console.log(`increment from child - ${by}`)
     this.setState(
      (prevState)=> {
        return{counter: prevState.counter - by}
      }
      );
   }


}


//function component example
 class CounterButton extends Component {
   //define initial state in constructor
   constructor(){
     super();
     this.state = {
       counter : 0 
      }
     //binding external method incremnet in this class
     this.increment = this.increment.bind(this);
     this.decrement = this.decrement.bind(this);
     //if you are using arrow method then we can void binding
    }
    //  render = () =>{
   render(){
      return (
     <div className="counter">
     <button onClick={this.increment}>+{this.props.by}</button>
     <button onClick={this.decrement}>-{this.props.by}</button>
    {/* <span className="count">{this.state.counter}</span> */}
    </div>
  )
}
//increment = () =>{
increment() { //update state => counter++
    //console.log('increment');
    //in order to use this state or counter we need to bind this methid to class
   // this.state.counter++;
   this.setState({
    counter: this.state.counter + this.props.by
   });

   this.props.incrementMethod(this.props.by);
  }

  decrement() {
   this.setState({
    counter: this.state.counter - this.props.by
   });

   this.props.decrementMethod(this.props.by);
  }

}

//this default value will be picked 'by' variable check APP.js for this
CounterButton.defaultProps ={
  by :1
}

//we want validate the type check for givem prop value then
CounterButton.propTypes ={
  by : PropTypes.number
}
export default Counter;
