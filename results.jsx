import React from "react";

function Results({questionList, userAnswers, restartQuiz}){

  function getScores(){
    let finalscore = 0;
    for(let i = 0; i < questionList.length; i++){
      if(userAnswers[i] === questionList[i].answer){
        finalscore++;
      }
    }
    return finalscore;
  }
  const score = getScores();
  return(
    <div>
      <h2>Quiz Completed!</h2>
      <P>Your Score: {score} / {questionList.length} </P>
      <button className="restart-button" onClick={restartQuiz}>Restart Quiz</button>
    </div>
  )


}

export default Results;