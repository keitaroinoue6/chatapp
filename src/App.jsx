import React, {useState, useEffect, useCallback} from 'react';
import './assets/styles/style.css'
import { AnswersList, Chats } from "./components/index"; 
import FormDialog from './components/Forms/FormDialog';
import {db} from './firebase/index'

const App = () => {
  const [answers, setAnswers] = useState([]);
  const [chats, setChats] = useState([]);
  const [currentId, setCurrentId] = useState('init');
  const [dataset, setDataset] = useState({});
  const [open, setOpen] = useState(false); //初期値はboolean型なのでfalseを渡す


  const displayNextQuestion = (nextQuestionId, nextDatteset) => {
    addChats({
      text: nextQuestionId.question,
      type: 'question'
    })

      setAnswers(nextQuestionId.answers)
      setCurrentId(nextQuestionId)
    
  }

   const selectAnswer = (selectedAnswer, nextQuestionId) => {
    switch (true) {
      case (nextQuestionId === 'contact'): //問い合わせのモーダルの表示
        handleClickOpen();
        break;


      case (/^https:*/.test(nextQuestionId)):
        const a = document.createElement('a');
        a.href = nextQuestionId;
        a.target = '_blank'; //ブランクを設定すると別タブでリンクを開くようになる
        a.click();
        break;
      default:
        addChats({
          text: selectedAnswer, 
          type: 'answer'
        })
      
    
        const chats = chats;
        chats.push({
          text: selectedAnswer, 
          type: 'answer'
        })
        
        setTimeout(() => displayNextQuestion(nextQuestionId, dataset[nextQuestionId ]), 1000); //回答の遅延表示について
        break;
    }
  }

  const addChats = (chat) => {
    setChats(prevChats => {
      return[...prevChats, chat]
    })
  }

  const handleClickOpen = () => {
    setState({open: true});
  };

  const handleClose = useCallback(() => {
    setOpen(false)
  }, [setOpen]);

  useEffect ( () => {
    (async() => {
      const initDataset = {};

      await db.collection('questions').get().then(snapshots => {
        snapshots.forEach(doc => {
          const id = doc.id
          const data = doc.data()
          initDataset[id] = data
        })
      })

      setDataset(initDataset)
      displayNextQuestion(currentId, initDataset[currentId])
    })();
  },[]);

  useEffect(() => {// スクロールの設定
    const scrollArea = document.getElementById('scroll-area');
    if (scrollArea) {
      scrollArea.scrollTop = scrollArea.scrollHeight;
    }
  });
  return (
    <section className="c-section">
      <div className="c-box">
        <Chats chats={chats}/>
        <AnswersList answers={answers} select = {selectAnswer}/>
        <FormDialog open={open} handleClose={handleClose} />
      </div>
    </section>
  );
  }

export default App;



