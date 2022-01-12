import React, { Component } from 'react';
//below FirstComponent is default but for ThirdComponent we need {}
import FirstComponent, {ThirdComponent} from './components/learning-examples/FirstComponent'
import SecondComponent from './components/learning-examples/SecondComponent'
import Counter from './components/counter/counter'
import './App.css';
import './bootstrap.css'

import TodoApp from './components/todo/TodoApp';
 //class component example
class App extends Component {
  render() {
    return (
      <div className="App">
       {/* <Counter/> */}
       <TodoApp/>
      </div> 
    );
  }
}
//unsed but kept for learning purpose
class LearningComponents extends Component {
  render() {
    return (
      <div className="LearningComponents">
       My Hello world
       <FirstComponent> </FirstComponent>
       <SecondComponent></SecondComponent>
       <ThirdComponent></ThirdComponent>
      </div>
    );
  }
}


export default App;