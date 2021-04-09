import React from 'react';
import defaultDataset from "./dataset"; //defauleDatesetを読み込む
import './assets/styles/style.css'
import { AnswersList, Chats } from "./components/index"; 

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

  initAnswer = () => {
    const initDataset = this.state.dataset[this.state.currentId];
    const initAnswers = initDataset.answers;
    this.setState({
      answers: initAnswers
    })
  }

componentDidMount(){
  this.initAnswer()
}


  render(){
    return (
      <section className="c-section">
        <div className="c-box">
          <Chats/>
          <AnswersList answers={this.state.answers} />
        </div>
      </section>
    );
  }
}



