import {useState} from 'react';
import NextButton from './NextButton';
import SpeechBubble from './SpeechBubble';
import Question from './Question';

function Level({data, index, setIndex, rewardAnswer}){
  const lines = data.lines.map((lineData, lineIndex) => toComponent(lineData, lineIndex))
  const [awaitingResponse, setAwaitingResponse] = useState(false)

  function nextLine(){
    //in effect, disables next button temporarially if next line is a question
    if(typeof data.lines[index.line+1] != 'string'){
      setAwaitingResponse(true)
    }
    //increments index of current line
    setIndex({...index, line:index.line+1})
  }

  function toComponent(lineData, lineIndex){
    if(typeof lineData === 'string'){
      //return speech bubble component if line datatype is string
      let speaker = lineData.slice(0, lineData.indexOf(":"));
      let text = lineData.slice(lineData.indexOf(":") + 1);
      return(
        <SpeechBubble speaker={speaker} key={lineIndex}> {text} </SpeechBubble>
      );

    } else {
      //return question component if datatype is not string
      return(
        <Question props={lineData} handleChoice={handleQuestionAnswered} key={lineIndex} />
      )
    }
  }

  function handleQuestionAnswered(isCorrect){
    setAwaitingResponse(false);
    rewardAnswer(isCorrect);
  }

  return(
    // maps each line to a list item, which is displayed
    // line id shennanigans are to help react differentiate the lines
    <>
      <ul className="flex flex-col">
        {lines.slice(0,index.line+1).map((line, i) => 
          <li key={i}>
            {line}
          </li>
        )}
      </ul>
      {(!awaitingResponse) && <NextButton handleClick={nextLine} />}
    </>
  )
}

export default Level;