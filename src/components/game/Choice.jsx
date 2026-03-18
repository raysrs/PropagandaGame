import { useState } from "react";
import SpeechBubble from "./SpeechBubble";

function Choice({options, handleChoice}){
  const [state, setState] = useState(options)

  function handleClick(i){
    setState(state[i]);
    handleChoice(i);
  };

  if (Array.isArray(state)){
    //rendered before user selection, maps each option to a button
    return(
      <ul className="text-center">
        {state.map((option, index) => 
          <li key={index} className="bg-pink-400 hover:bg-fuchsia-500 hover:font-semibold font-serif rounded-full p-2 my-4 mx-8 text-center justify-center">
            <button onClick={() => handleClick(index)}>
              {['A', 'B', 'C'][index]}: {option}
            </button>
          </li>
        )}
      </ul>
    );
  } else {
    //rendered after user selection, returns speech bubble with selected option's text
    return(
      <SpeechBubble type="Patricia"> {state} </SpeechBubble>
    );
  };
};

export default Choice;