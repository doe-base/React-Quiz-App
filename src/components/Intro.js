function Intro({ setGameStarted }) {
    return ( 
        <div className="intro-container">
            <h1>Quizzical</h1>
            <p>Test Your Brain Power</p>
            <button onClick={setGameStarted} className="welcome-btn">Start Quizz</button>
        </div>
     );
}

export default Intro;