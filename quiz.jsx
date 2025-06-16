
import React, { useState } from 'react';
import Results from './results';

function Quiz(){

  const questionList = [
    {
      question: "What is the capital city of Ghana",
      options: ["Berlin","Kampala","Accra","Lagos"],
      answer: "Accra",
    },
    {
      question: "Which language is used for web apps",
      options: ["All","Python","Javascript","Php"],
      answer: "All",
    },
    {
      question: "Who was the most biggest in Africa in 2025",
      options: ["MadeinGhana","Keke","Peller","Shanks"],
      answer: "Peller",
    },
    {
      question: "Why was the first woman to die",
      options: ["Hilder Amtasda","Merry","Sarah","Eve"],
      answer: "Eve",
    }
  ];

  initialAnswers = [null,null,null,null,null];
  const [userAnswers, setUserAnswers] = useState(initialAnswers);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const selectedAnswer = userAnswers[currentQuestion];
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);

  function handleselection(option){
    const newUserAnswers = [...userAnswers];
    newUserAnswers[currentQuestion] = option;

    setUserAnswers(newUserAnswers);
  };

  function goToNext(){
    if(currentQuestion === questionList.length - 1){
      setIsQuizCompleted(true);
    }
    else{
      setCurrentQuestion(currentQuestion + 1);
    }  
  };
  function goToPrevious(){
    if(currentQuestion > 0){
    setCurrentQuestion(currentQuestion -1);
    }
  };

  function restartQuiz(){
    setUserAnswers(initialAnswers);
    setCurrentQuestion(0);
    setIsQuizCompleted(false); 
  };
  if (isQuizCompleted){
    return (
      <div>
        <Results userAnswers={userAnswers} questionList={questionList} restartQuiz = {restartQuiz}/>
      </div>
    )
  };

  return (
  <div>
    <h5>Start Now</h5>
    <h2>Question {currentQuestion + 1}:</h2>
    <p className="question">{questionList[currentQuestion].question}</p>
    {questionList[currentQuestion].options.map((option) => (
      <button className={"option" + (selectedAnswer === option ? "selected" : "")} onClick={() => handleselection(option)}>{option}</button>
    ))}
    <div className="nav-buttons">
      <button onClick={goToPrevious} disabled={currentQuestion === 0}>
        {""}
        Previous{""}
        </button>
      <button onClick={goToNext} disabled={!selectedAnswer}>
        {currentQuestion === questionList.length - 1 ? "Submit" : "Next"} 
        </button>
    </div>
  </div>)
}

export default Quiz;