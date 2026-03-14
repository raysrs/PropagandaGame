function GameDialogue(lines){
  if (lines == []) return(<></>)
  return(
    <ul>
      {lines.map((line) => 
        <li key={line.id}>
          {line.type == "question" ? <Question {...line.text}/> : <SpeechBubble type={line.type} text={line.text}/> }
        </li>
      )}
    </ul>
  )
}

function SpeechBubble(type, text){
  return(
    <div className={(type == "Poppy") ? "bg-blue-500" : "bg-yellow-500"}>
      {type}: {text}
    </div>
  )
}

function Question(options, responses){
  const [answer, setAnswer] = useState(-1)

  if (answer == -1){
    //executed before answer chosen
    return(
      <ul>
        {options.map((option, index) => 
          <li key={index}>
            <button onClick={setAnswer(index)}>
              {['A', 'B', 'C'][index]}: {option}
            </button>
          </li>
        )}
      </ul>
    )
  } else {
    //executed after answer chosen
    return(
      <>
        <SpeechBubble type="Patricia" text={options[answer]} />
        <SpeechBubble type="Poppy" text={responses[0]} />
      </>
    )
    
  }
}

export default GameDialogue;