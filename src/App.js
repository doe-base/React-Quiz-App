import React from "react";
import Welcome from "./components/Welcome";
import Question from "./components/Question";
import './style.css'


export default function App(){
    let [gameStarted, setGameStarted] = React.useState(false)
    let [submitted, setSubmitted] = React.useState(false)
    let [questions, setQuestion] = React.useState([])

    
        React.useEffect(function(){
            fetch("https://opentdb.com/api.php?amount=5&type=multiple")
             .then(res => res.json())
             .then(data => setQuestion(data.results))
        },[gameStarted])
    
    // function setter(){
    //     fetch("https://opentdb.com/api.php?amount=5&type=multiple")
    //     .then(res => res.json())
    //     .then(data => setQuestion(data.results))
    // }

    



    function toggller(){
        setGameStarted(true)

    }


    function submitterFunc(){
        setSubmitted(true)
    }

    // function resetGame(){
    //     setSubmitted(prev => !prev)
    //     gameStarted(prev => !prev)
    //     setter()

    //  }

    let newArray = questions.map(item => <Question  
        key={item.correct_answer} question={item.question}  correct_answer={item.correct_answer} wrong_answer={item.incorrect_answers} submitted={submitted}
    /> )

return(
    gameStarted ? <div className="container-div">{newArray} 
    <button className="welcome-btn check-btn" onClick={!submitted ? submitterFunc : resetGame}>{submitted ? 'Restart' : 'Submit'}</button>
        <div className="background-design"></div>
        <div className="background-design2"></div>

    </div> : <Welcome toggller={toggller} />
)


}







