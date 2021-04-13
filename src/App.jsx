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
    this.selectAnswer = this.selectAnswer.bind(this)
  }

  displayNextQuestion = (nextQuestionId) => {
    const chats = this.state.chats
    chats.push({
      text: this.state.dataset[nextQuestionId].question,
      type: 'question'
    })

    this.setState({
      answers: this.state.dataset[nextQuestionId].answers,
      chats: chats,
      currentId: nextQuestionId
    })
  }

  selectAnswer = (selectedAnswer, nextQuestionId) => {
    switch (true) {
      case (nextQuestionId === 'init'):
        this.displayNextQuestion(nextQuestionId)
        
        break;
    
      default:
        const chat = {
          text: selectedAnswer, 
          type: 'answer'
        }
    
        const chats = this.state.chats;
        chats.push({
          text: selectedAnswer, 
          type: 'answer'
        })
        
        this.setState({
          chats: chats
        })

        setTimeout(() => this.displayNextQuestion(nextQuestionId), 1000); //回答の遅延表示について
        break;
    }
  }




componentDidMount(){
  const initAnswer = "";
  this.selectAnswer(initAnswer, this.state.currentId)
}

componentDidUpdate(){ // スクロールの設定
  const scrollArea = document.getElementById('scroll-area')
  if (scrollArea) {
    scrollArea.scrollTop = scrollArea.scrollHeight
  }
}

  render(){
    return (
      <section className="c-section">
        <div className="c-box">
          <Chats chats={this.state.chats}/>
          <AnswersList answers={this.state.answers} select = {this.selectAnswer}/>
        </div>
      </section>
    );
  }
}



