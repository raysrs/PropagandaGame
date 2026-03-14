import { useState } from "react";

function GameDialogue({lines, addLikes}){
  return(
    <ul>
      {lines.map((line) => 
        <li key={line.id}>
          {line.type == "question" ? <Question text={line.text} addLikes={addLikes}/> : <SpeechBubble type={line.type} text={line.text}/> }
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

function Question({text, addLikes}){
  const [index, setIndex] = useState({choice:-1, response:-1})
  const handleClick = (x) => {
    if(x == text.answer){
      setIndex({choice:x, response:0});
      addLikes(Math.floor(Math.random()*5+50));
    } else {
      setIndex({choice:x, response:1});
    }
  }

  if (index.choice == -1){
    //executed before answer chosen
    return(
      <div>
        <ul>
          <li><SpeechBubble type="Poppy" text={text.prompt} /></li>
          {text.options.map((option, i) =>
            <li key={i}>
              <button onClick={() => handleClick(i)}>
                {['A', 'B', 'C'][i]}: {option}
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
        <SpeechBubble type="Patricia" text={text.options[index.choice]} />
        <SpeechBubble type="Poppy" text={text.responses[index.response]} />
      </>
    ) 
  }
}

export default GameDialogue;