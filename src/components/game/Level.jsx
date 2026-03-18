import { useState, useRef } from "react";
import SpeechBubble from "./SpeechBubble";
import Choice from "./Choice";
import NextButton from "./NextButton";

function Level({props, handleLevelCompletion}) {
  let remainingLines = useRef(props.lines);
  const [renderedLines, setRenderedLines] = useState([]);
  const [stats, setStats] = useState({likes:0, choices:[], correctAnswers:0});

  const pushLine = (l) => setRenderedLines(renderedLines.concat([l]));

  function next() {
    if (remainingLines.current.length == 0){
      handleLevelCompletion(stats);
    } else {
      nextLine();
    }
  }

  function nextLine() { 
    const line = remainingLines.current.shift();
    let lineType = line.slice(0, line.indexOf(":"));
    let lineContent = line.slice(line.indexOf(":") + 1);

    switch (lineType) {
      case "Poppy": case "Patricia":
        //render speech bubble
        pushLine(
          <SpeechBubble type={lineType}> {lineContent} </SpeechBubble>
        )
        break;

      case "prompt":
        //adds prompting speechbubble and choice line
        pushLine(
          <SpeechBubble type="Poppy"> {lineContent} </SpeechBubble>
        )
        const options = remainingLines.current.shift();
        pushLine(
          <Choice options={options} handleChoice={handleChoice} />
        )
        break;
    }
  }

  function handleChoice(choice) {
    const isCorrect = (choice == props.key[stats.choices.length]);
    const i = isCorrect ? 1 : 0;

    //if correct reward 90-110 likes, if incorrect reward 1-10 likes
    const likesGained = Math.floor(isCorrect ? (Math.random() * 20 + 90) : (Math.random() * 10 + 1));
    
    // change user statistics accordingly
    setStats({
      likes: stats.likes + likesGained,
      choices: stats.choices.concat(choice),
      correctAnswers: stats.correctAnswers + i
    });

    //get 1st reaction if correct and 2nd if incorrect
    const responses = remainingLines.current.shift()

    // render poppy's response
    pushLine(
      <SpeechBubble type="Poppy"> {responses.at(1-i)} </SpeechBubble>
    );
  }

  return(
    // maps each line to a list item, which is displayed
    // line id shennanigans are to help react differentiate the lines
    <div>
      <ul className="flex flex-col">
        {renderedLines.map((line, index) => 
          <li key={index}>
            {line}
          </li>
        )}
      </ul>
      {(!Array.isArray(remainingLines.current[0])) && <NextButton handleClick={next} />}
    </div>
  );
}

export default Level;