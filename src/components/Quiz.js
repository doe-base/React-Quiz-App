
import Questions from "./Questions";

function Quiz({quizData, pendding, error, setIsSubmitted, isSubmitted, score, setScore, restartGame}) {

    if(quizData){
        var question = quizData.map(item => <Questions 
            questions={item.question} 
            answers={item.answers} 
            key={item.id} 
            isSubmitted={isSubmitted} 
            setScore={setScore} 
            quizData={quizData}/>)
    }else{
        return;
    }   
     
    function calculateScore() {
            setIsSubmitted(true);
        }
      

    return ( 
        <div className="quiz-container">
            {pendding && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {quizData && <div>
                            <h1>Quizzical</h1>
                            {question}
                            {!isSubmitted ? <button onClick={calculateScore}>Done</button> 
                                          : <button onClick={restartGame}>Restart</button>}
                            {isSubmitted && <p>{`You Scored ${score}`}</p>}
                            <p>Designed by Doe Idoko</p>
                        </div> 
            }

        </div>
     );
}

export default Quiz;