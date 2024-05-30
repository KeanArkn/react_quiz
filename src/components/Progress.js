export default function Progress({index,numQuestions,points,maxPossiblePoints,answer}) {
  return (
    <header className="progress">
        <progress max={numQuestions} value={answer===null ? index : index+1} />
        <p>Question <strong>{index+1}</strong> / {numQuestions} </p>
        <p>Points <strong>{points}</strong> / {maxPossiblePoints}</p>
    </header>
  )
}
