import React from "react";
import Buttons from "./Buttons";
import {nanoid} from 'nanoid'


export  default  function Question(props){
    
    const {question, correct_answer, wrong_answer} = props
    
   
    

    //the below function will return an array with random index
    function randomArrayShuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  let optionsArr = randomArrayShuffle(
    [
        {
            answer: correct_answer,
            isCorrect: true,
            isHeld: false,
            id: nanoid()
        },
        {
            answer: wrong_answer[0],
            isCorrect: false,
            isHeld: false,
            id: nanoid()
        },
        {
            answer: wrong_answer[1],
            isCorrect: false,
            isHeld: false,
            id: nanoid()
        },
        {
            answer: wrong_answer[2],
            isCorrect: false,
            isHeld: false,
            id: nanoid()
        }
    ]

  )

    let [theArr, setTheArr] = React.useState(optionsArr)


    function hold(id){
        setTheArr(prevTheArr => prevTheArr.map(item => item.id == id ? {...item, isHeld: !item.isHeld} : {...item, isHeld: false})) 
    }
    let mapbtn = theArr.map(item => <Buttons properties={item}  hold={()=>hold(item.id)} submitted={props.submitted}/>)
    return(
        <section>
            <h3>{question}</h3>
            {mapbtn}
            <hr/>
        </section>
    )
}