import { useState } from "react";

function GameDialogue({lines}){
  return(
    <ul>
      {lines.map((line) => 
        <li key={line.id}>
          {line.type == "question" ? <Question text={line.text}/> : <SpeechBubble type={line.type} text={line.text}/> }
        </li>
      )}
    </ul>
  )
}

function SpeechBubble({type, text}){
  return(
    <div className={(type == "Poppy") ? "bg-blue-500" : "bg-yellow-500"}>
      {type}: {text}
    </div>
  )
}

function Question({text}){
  const [answer, setAnswer] = useState(-1)

  if (answer == -1){
    //executed before answer chosen
    return(
      <div>
        <ul>
          <li><SpeechBubble type="Poppy" text={text.prompt} /></li>
          {text.options.map((option, index) =>
            <li key={index}>
              <button onClick={() => setAnswer(index)}>
                {['A', 'B', 'C'][index]}: {option}
              </button>
            </li>
          )}
        </ul>
      </div>
    )
  } else {
    //executed after answer chosen
    return(
      <>
        <SpeechBubble type="Poppy" text={text.prompt} />
        <SpeechBubble type="Patricia" text={text.options[answer]} />
        <SpeechBubble type="Poppy" text={text.responses[0]} />
      </>
    ) 
  }
}

export default GameDialogue;