import React, { useState } from 'react';
import "../css/style.css";
import Header from "../components/header";

const QuizApp = () => {
  const questions = [
    {
      id: 1,
      question: 'What is the capital of France?',
      options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
      correctAnswer: 'Paris',
    },
    {
      id: 2,
      question: 'Which planet is known as the Red Planet?',
      options: ['Mars', 'Venus', 'Jupiter', 'Saturn'],
      correctAnswer: 'Mars',
    },
    // Add more questions as needed
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    // Check if the selected option is correct and update the score
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    // Move to the next question
    setCurrentQuestion(currentQuestion + 1);
    setSelectedOption(null); // Reset selected option for the next question
    setSubmitted(false); // Reset the submitted state
  };

  const handleCheckAnswer = () => {
    setSubmitted(true);
  };

  return (
    <div>
      <Header />

      <section className="teacher" id="teacher">
        <h1 className="heading" style={{ marginTop: "150px" }}>
          Quiz
        </h1>
      </section>

      <section className="Lectures">
        <div className="box-container">
          {currentQuestion < questions.length ? (
            <div className="box">
              <div className="classhead">
                <h4>{questions[currentQuestion].question}</h4>
              </div>

              <div className="options-container">
                <div className="options-grid">
                  {questions[currentQuestion].options.map((option, index) => (
                    <button
                      key={index}
                      className={`option ${selectedOption === option ? 'selected' : ''}`}
                      onClick={() => handleOptionSelect(option)}
                      disabled={submitted} // Disable options after submission
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              <button
                className={`next-button`}
                onClick={submitted ? handleNextQuestion : handleCheckAnswer}
              >
                {submitted ? 'Next' : 'Check'}
              </button>

              {submitted && (
                <div className="correct-answer">
                  Correct Answer: {questions[currentQuestion].correctAnswer}
                </div>
              )}
            </div>
          ) : (
            <div className="box">
              <h2>Quiz Completed!</h2>
              <p>Your Score: {score} out of {questions.length}</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default QuizApp;
