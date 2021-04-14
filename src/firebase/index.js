import firebase from 'firebase/app'
import 'firebase/firestore'
import firebaseConfig from './config'

firebase.initializeApp(firebaseConfig); //forebaseの初期化 initializeApp
export const db = firebase.firestore();