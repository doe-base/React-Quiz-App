function Button({properties, hold, isSubmitted}) {

    
    return ( 
        <button
        style={{backgroundColor: isSubmitted && properties.isCorrect ? '#9debb2' : isSubmitted && properties.isSelected ? '#eb9da0' : null}}
        onClick={hold} className={properties.isSelected ? 'norm' : 'hold'}>
            {properties.answer}
        </button>
     );
}

export default Button;