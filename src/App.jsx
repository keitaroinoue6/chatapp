import React from 'react';
import defaultDataset from "./dataset"; //defauleDatesetを読み込む
import './assets/styles/style.css'
import { AnswersLsit } from "./components/index"; 

export class App extends React.Component {
  constructor(props) { //初期のstateの状態の定義
    super(props);
    this.state ={
      answers: [],
      chats: [],
      currentId: "init",
      dataset: defaultDataset,
      open: false
    }
  }
  render(){
    return (
      <section className="c-section">
        <div className="c-box">
          <AnswersLsit />
        </div>
      </section>
    );
  }
}



