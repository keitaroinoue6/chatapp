import * as functions from 'firebase-functions'; 
import * as admin from "firebase-admin"; 
admin.initializeApp(); 
const db = admin.firestore(); //これはよくやる技術。最初から定数で宣言することでメモリの確保をしている

const sendResponse = (response: functions.Response, statusCode: number, body: any) => {
  
}

export const addDataset = functions.https.onRequest(async (req: any, res: any) => {

})

