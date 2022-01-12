import React, { Component } from 'react';
 class FirstComponent extends Component {
    render() {
      return (
        <div className="firstComponent">
         My First Component
        </div>
      );
    }
  }

  //import third component

  export class ThirdComponent extends Component {
    render() {
      return (
        <div className="thirdComponent">
         My Third Component
        </div>
      );
    }
  }

  export default FirstComponent;