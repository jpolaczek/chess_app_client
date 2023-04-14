import './App.css';
import React, { Component } from 'react';
import './App.css';

type MyProps = {
}

class App extends Component<MyProps>{
  constructor(props: MyProps) {
    super(props)
  }


  render() {
    return (
      <div className='App'>
        <h1>React Typescript Application!!</h1>
      </div>
    );
  }
}
export default App;
