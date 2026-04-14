import { useState, useContext } from "react";
import { UserDispatchContext } from "../UserContext";
import { SpeechBubble } from "./";

function Question({props}){
  const userDispatch = useContext(UserDispatchContext);

  const [state, setState] = useState({choice:-1, response:-1});

  function handleClick(i){
    const isCorrect = (i == props.correctAnswer);
    const likesRewarded = Math.floor(isCorrect ? (Math.random() * 20 + 90) : (Math.random() * 10 + 1));

    //update question state (deactivates buttons & highlights chosen answer)
    setState({choice:i, response:isCorrect ? 0 : 1});

    //rewards user & updates stats
    userDispatch({type:"addLikes", likes:likesRewarded})
    userDispatch({type:"addLevelStats", likes:likesRewarded, correctAnswers:isCorrect ? 1 : 0})
  };

  return(
    <>
      <SpeechBubble speaker={"Poppy"}>{props.prompt}</SpeechBubble>
      <ul className="text-center">{props.options.map((text, i) => 
        <li key={i} className="my-4 mx-8 text-center justify-center">{
          (state.choice == -1)

            // displayed before choice made
          ? <div className="bg-pink-400 hover:bg-fuchsia-500 hover:font-semibold font-serif rounded-full p-2">
              <button onClick={() => handleClick(i)}> {['A', 'B', 'C'][i]}: {text} </button>
            </div>

          : // displayed after choice made
            <div className={
              (state.choice == i) // chosen option displays brighter than non-chosen
              ? "bg-pink-400 font-serif rounded-full p-2" 
              : "bg-pink-200 font-serif rounded-full p-2"
            }>
              {['A', 'B', 'C'][i]}: {text}
            </div>
          
        }</li>
      )}</ul>
      {
        // displays poppy's response if user has made choice
        (state.choice != -1) && <SpeechBubble speaker={"Poppy"}>{props.responses[state.response]}</SpeechBubble>
      }
    </>
  )
};

export default Question;