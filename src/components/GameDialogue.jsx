import { useState } from "react";

function GameDialogue({lines}){
  return(
    <ul className="flex flex-col">
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
    <div className={(type == "Poppy") ? "bg-blue-500 rounded-t-xl rounded-br-xl mx-8 my-6 p-2 w-[500px]" : "bg-amber-500 rounded-t-xl rounded-bl-xl mx-8 w-[500px] p-2 justify-self-end"}>
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