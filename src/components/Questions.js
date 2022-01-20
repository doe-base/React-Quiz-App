import { useEffect, useState } from 'react/cjs/react.development';
import Button from './Button'

function Questions({ questions, answers, isSubmitted, setScore }) {

const [ans, setAns] = useState(answers)

function hold(id){
  if(isSubmitted){
    return;
  }else{
    setAns(prevAns => prevAns.map(item => item.id === id ? {...item, isSelected: !item.isSelected} : {...item, isSelected: false})) 
  }
}

// Calculate score
useEffect(function(){
    ans.map((answer) => {
      if (answer.isSelected && answer.isCorrect){
        setScore((prevScore) => prevScore + 1);
      }
    });
  
}, [ans])

  let mapbtn = ans.map(item => <Button 
                                  properties={item} 
                                  key={item.id} hold={()=>hold(item.id)} 
                                  isSubmitted={isSubmitted}/>)
 
 
    return ( 
        <section className="question-container">
          <h3>{questions}</h3>
          {mapbtn}
          <hr />
        </section>
     );
}

export default Questions;