import { useState } from "react";

function GameDialogue({lines, addLikes}){
  return(
    <ul className="flex flex-col">
      {lines.map((line) => 
        <li key={line.id}>
          {line.type == "question" 
            ? <Question text={line.text} addLikes={addLikes} /> 
            : <SpeechBubble text={line.text} type={line.type} />
          }
        </li>
      )}
    </ul>
  )
}

function SpeechBubble({text, type}){
  return(
    <div className={(type == "Poppy") ? "bg-amber-400 rounded-t-xl rounded-br-xl mx-8 my-6 p-2 w-[500px]" : "bg-lime-500 rounded-t-xl rounded-bl-xl w-[500px] p-2 mx-8 float-right"}>
      {text}
    </div>
  )
}

function Question({text, addLikes}){
  const [index, setIndex] = useState({choice:-1, response:-1})

  function handleChoice(i){
    if (i == text.answer){
      //reward 90-110 likes if user's choice is correct
      addLikes(Math.ceil(Math.random()*20 + 90));
      setIndex({choice:i, response:0});
    } else {
      //reward 0-10 likes if user's choice is incorrect
      addLikes(Math.ceil(Math.random()*10));
      setIndex({choice:i, response:1});
    };
  };

  if (index.choice == -1){
    //rendered before answer chosen
    return(
      <ul className="text-center">
        <li><SpeechBubble type="Poppy" text={text.prompt} /></li>
        {text.options.map((option, i) =>
          <li key={i} className="bg-pink-400 hover:bg-fuchsia-500 hover:font-semibold font-serif rounded-full p-2 my-4 mx-8 text-center justify-center">
            <button onClick={() => handleChoice(i)}>
              {['A', 'B', 'C'][i]}: {option}
            </button>
          </li>
        )}
      </ul>
    );
  } else {
    //rendered after answer chosen
    return(
      <div>
        <SpeechBubble text={text.prompt} type="Poppy" />
        <SpeechBubble text={text.options[index.choice]} type="Patricia" />
        <SpeechBubble text={text.responses[index.response]} type="Poppy"/>
      </div>
    );
  };
};

export default GameDialogue;