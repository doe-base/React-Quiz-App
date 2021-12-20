import React from "react";
import '../style.css'


export default function Welcome(props){
    return(
        <main>
            <div className="background-design"></div>
            <div className="background-design2"></div>
            <h1>Get Sense</h1>
            <p>Test your knowlege on world facts</p>
            <button type="button" className="welcome-btn"  onClick={props.toggller}>Start Game</button>
        </main>
    )
}