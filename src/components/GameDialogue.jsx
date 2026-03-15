import { useState } from "react";

function GameDialogue({lines, addLikes}){
  return(
    <ul className="flex flex-col">
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
    <div className={(type == "Poppy") ? "bg-amber-400 rounded-t-xl rounded-br-xl mx-8 my-6 p-2 w-[500px]" : "bg-lime-500 rounded-t-xl rounded-bl-xl w-[500px] p-2 mx-8 float-right"}>
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
            <li key={i} className="bg-pink-400 hover:bg-fuchsia-500 hover:font-semibold font-serif rounded-full p-2 my-4 mx-8 text-center justify-center">
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