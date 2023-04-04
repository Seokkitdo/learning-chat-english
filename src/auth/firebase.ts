// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDV8gyZFX5iyco_C8rcMdi-NhZTfRw52j4',
  authDomain: 'learning-english-chat-auth.firebaseapp.com',
  databaseURL:
    'https://learning-english-chat-auth-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'learning-english-chat-auth',
  storageBucket: 'learning-english-chat-auth.appspot.com',
  messagingSenderId: '481655441781',
  appId: '1:481655441781:web:c4d877f611203d5cf1eb3c',
  measurementId: 'G-VT5M3ZV8DM'
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
