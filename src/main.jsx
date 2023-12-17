import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyDhFy-qKt4JrPn5MjjfxhJUH7JN87SNaJc",
  authDomain: "finaldeliver-7b523.firebaseapp.com",
  projectId: "finaldeliver-7b523",
  storageBucket: "finaldeliver-7b523.appspot.com",
  messagingSenderId: "934192804338",
  appId: "1:934192804338:web:8f0a865649efa445a7bb6b"
};

const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <App />
  </ChakraProvider>

)
