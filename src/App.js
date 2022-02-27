import React, {useState} from "react"
import Header from "./components/Header";
import Button from "./components/Button";
import {QuizData} from "./components/QuizData";
import TotalScore from "./components/TotalScore";
import RestartButton from "./components/RestartButton";
import FirstPage from "./components/FirstPage";
//import Timer from "./components/Timer";
const App = () => {
  const [opt, setOpt] = useState(0)
  const [score, setScore] = useState(0)
  const [inComplete, setInComplete] = useState(true)
  const [start, setStart] = useState(false)
 

  const handleClick = () => {
    const currentQuestion = opt + 1
    if (currentQuestion <= QuizData.length - 1){
      setOpt(currentQuestion)
      console.log(currentQuestion)
    }else{
      setInComplete(!inComplete)
    }
  }
  const handleClickTwo = () => {
    setStart(!start)
  }
  const checkCorrect = (btn) => {
    if (btn.current.innerHTML === QuizData[opt].answer){
      setScore(score + 1)
    }
  }
  const handleRestart = () => {
    setOpt(0)
    setInComplete(!inComplete)
    setScore(0)
  }
  return (
    <>
    {start ?
    <div className = "quiz">
    {inComplete ? 
    <>
    <Header quesNum = {opt + 1} header = {QuizData[opt].question}/>
      <div className = "options">
        <Button class = "opt1" increment = {handleClick} check = {checkCorrect} option = {QuizData[opt].option1} />
        <Button class = "opt2" increment = {handleClick} check = {checkCorrect} option = {QuizData[opt].option2} />
        <Button class = "opt3" increment = {handleClick} check = {checkCorrect} option = {QuizData[opt].option3} />
        <Button class = "opt4" increment = {handleClick} check = {checkCorrect} option = {QuizData[opt].option4} />
      </div>
      </>
      :
      <div className = "final">
      <TotalScore score = {score} maxScore = {QuizData.length} />
      <RestartButton text = "Restart" restart = {handleRestart} />
      </div>
      }
    </div>
    : <FirstPage startQuiz = {handleClickTwo}/>
    }
    </>
  );
}

export default App;
