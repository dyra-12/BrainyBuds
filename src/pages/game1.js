// src/game1.js
import React, { useState } from 'react';
import './styles1.css';

const AdditionGame = () => {
  const [num1, setNum1] = useState(Math.floor(Math.random() * 10) + 1);
  const [num2, setNum2] = useState(Math.floor(Math.random() * 10) + 1);
  const [userAnswer, setUserAnswer] = useState('');
  const [result, setResult] = useState('');
  
  const generateNewNumbers = () => {
    setNum1(Math.floor(Math.random() * 10) + 1);
    setNum2(Math.floor(Math.random() * 10) + 1);
    setUserAnswer('');
    setResult('');
  };

  const checkAnswer = () => {
    const sum = num1 + num2;
    if (parseInt(userAnswer, 10) === sum) {
      setResult('Correct!');
    } else {
      setResult('Incorrect. Try again.');
    }
  };

  return (
    <div className="addition-game-container">
      <div className="addition-game-box">
        <h1>Addition Game</h1>
        <p>
          Solve the addition problem:
          {` ${num1} + ${num2} = `}
        </p>
        <input
          className="addition-input"
          type="number"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
        />
        <button className="addition-button" onClick={checkAnswer}>Check Answer</button>
        <p>{result}</p>
        <button className="addition-button" onClick={generateNewNumbers}>Next Problem</button>
      </div>
    </div>
  );
};

export default AdditionGame;
