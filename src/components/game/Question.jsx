import { useState } from "react";
import SpeechBubble from "./SpeechBubble";

function Question({props, handleChoice}){
  const [index, setIndex] = useState({choice:-1, response:-1});

  function handleClick(i){
    const isCorrect = (i == props.correctAnswer);
    setIndex({choice:i, response:isCorrect ? 0 : 1});
    handleChoice(isCorrect);
  };

  return(
    <>
      <SpeechBubble speaker={"Poppy"}>{props.prompt}</SpeechBubble>
      <ul className="text-center">{props.options.map((text, i) => 
        <li key={i} className="my-4 mx-8 text-center justify-center">{
          (index.choice == -1)

            // displayed before choice made
          ? <div className="bg-pink-400 hover:bg-fuchsia-500 hover:font-semibold font-serif rounded-full p-2">
              <button onClick={() => handleClick(i)}> {['A', 'B', 'C'][i]}: {text} </button>
            </div>

          : // displayed after choice made
            <div className={
              (index.choice == i) // chosen option displays brighter than non-chosen
              ? "bg-pink-400 font-serif rounded-full p-2" 
              : "bg-pink-200 font-serif rounded-full p-2"
            }>
              {['A', 'B', 'C'][i]}: {text}
            </div>
          
        }</li>
      )}</ul>
      {
        // displays poppy's response if user has made choice
        (index.choice != -1) && <SpeechBubble speaker={"Poppy"}>{props.responses[index.response]}</SpeechBubble>
      }
    </>
  )
};

export default Question;