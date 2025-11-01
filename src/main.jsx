import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { initializeApp } from "firebase/app";
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


const firebaseConfig = {
  apiKey: "AIzaSyBYutw4KPKHvYTijMGUqs-eU9jOV905y_I",
  authDomain: "proyectofinal-888b5.firebaseapp.com",
  projectId: "proyectofinal-888b5",
  storageBucket: "proyectofinal-888b5.firebasestorage.app",
  messagingSenderId: "580170744103",
  appId: "1:580170744103:web:0e7be6818a356af56ce902"
};

initializeApp(firebaseConfig);