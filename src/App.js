import React from 'react';
import './App.css';

export class App extends React.Component {
  constructor(props) { //初期のstateの状態の定義
    super(props);
    this.state ={
      answer: [],
      chats: [],
      currentId: "init",
      dateset: {},
      open: false
    }
  }
  render(){
    return (
      <div>

      </div>
    );
  }
}


