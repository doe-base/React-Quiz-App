import React from "react";


export default function Buttons(props){
    const {properties, hold} = props 
    


    return(
       <button className={ !props.submitted && properties.isHeld ? 'lite' : 'norm'} 
       style={{backgroundColor: props.submitted && properties.isCorrect ? '#9debb2' : props.submitted && properties.isHeld ? '#eb9da0' : null}}
        onClick={!props.submitted ? hold : undefined} >{properties.answer}</button>
    )
}