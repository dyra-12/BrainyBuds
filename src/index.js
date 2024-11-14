import React from 'react';
import ReactDOM from 'react-dom/client';
import QuizApp from './pages/quiz';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import Class1page from './class1/class1';
import Class2page from './pages/class2';
import Home from './Home'
import Class3page from './pages/class3';
import Signup from './Login/Login';
import AnotherComponent from './pages/AnotherComponent';
import BookC1 from './pages/bookc1';
import AdditionGame from './pages/game1';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AdditionGame />
  </React.StrictMode>
);

reportWebVitals();
