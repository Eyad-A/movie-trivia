import React from 'react';
import QuestionCard from './components/QuestionCard';

function App() {
  
  async function startQuiz() {

  }

  function checkAnswer(e: React.MouseEvent<HTMLButtonElement>) {

  }

  function nextQuestion() {

  }
  
  return (
    <div className="App">
      <h1>Movie Trivia </h1>
      <button className="start" onClick={startQuiz}>
        Start quiz
      </button>
      <p className="score">Score: </p>
      <p>Loading. Please wait...</p> 
      <QuestionCard />
      <button className="next" onClick={nextQuestion}>
        Next Question 
      </button>
    </div>
  );
}

export default App;
