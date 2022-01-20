import Intro from "./components/Intro";
import Quiz from "./components/Quiz"
import { nanoid } from "nanoid";
import "./style.css"
import { useState } from "react";
import { useEffect } from "react/cjs/react.development";

function App() {

    const [quizData, setQuizData] = useState([])
    const [pendding, setPendding] = useState(true)
    const [error, setError] = useState('')
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [gameStarted, setGameStarted] = useState(false)
    const [score, setScore] = useState(0)
    const [restartingGame, setRestartGame] = useState(false)

    useEffect(function(){
        fetch("https://opentdb.com/api.php?amount=5&type=multiple")
            .then(res => {
                if(!res.ok){
                    throw Error("sorry could get the resource")
                }else{
                    return res.json()
                }
            })
            .then(data => {
                const questionData = data.results.map((question) => {
                    return {
                      question: (question.question),
                      id: nanoid(),
                      answers: [
                        ...question.incorrect_answers.map((answer) => ({
                          answer: (answer),
                          isCorrect: false,
                          isSelected: false,
                          id: nanoid(),
                        })),
                        {
                          answer: (question.correct_answer),
                          isCorrect: true,
                          isSelected: false,
                          id: nanoid(),
                        },
                      ].sort(() => Math.random() - 0.5),
                    }
                })
                setQuizData(questionData)
                setPendding(false)
                setError(null)
            })
            .catch((err)=>{
                setError(err.message)
                setPendding(false)
            })
    }, [restartingGame])

   

    function startGame(){
        setGameStarted(true)
    }

   function restartGame(){
    setIsSubmitted(false)
    setScore(0)
    setRestartGame(prevRestGame => !prevRestGame)
   }
  

    return (
        gameStarted ?  <div>
                        <Quiz quizData={quizData} pendding={pendding} error={error} setIsSubmitted={setIsSubmitted} isSubmitted={isSubmitted} score={score} setScore={setScore} restartGame={restartGame}/>
                       </div> 
                       : <Intro  setGameStarted={startGame}/>
        
     );
}

export default App;

