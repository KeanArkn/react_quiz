export default function Options({question, dispatch, answer}) {
  return (
    <div className="options">
        {question.options.map((option,index)=>(
            <button key={index} disabled={answer !== null} className={`btn btn-option ${index === answer ? 'answer' : ''} ${answer !== null ? index === question.correctOption ? 'correct' : 'wrong' : ''}`} onClick={()=>dispatch({type:'newAnswer',payload:index})}>{option}</button>
        ))}
    </div>
  )
}
