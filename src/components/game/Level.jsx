import { useContext } from 'react';
import { UserContext, UserDispatchContext } from '../UserContext';
import { Sidebar, NextButton, SpeechBubble, Question } from "./"

function Level({data}){
  const user = useContext(UserContext);
  const userDispatch = useContext(UserDispatchContext)

  const lines = data.lines.map((lineData, lineNum) => toComponent(lineData, lineNum))

  function toComponent(lineData, lineNum){
    if(typeof lineData === 'string'){
      //return speech bubble component if line datatype is string
      let speaker = lineData.slice(0, lineData.indexOf(":"));
      let text = lineData.slice(lineData.indexOf(":") + 1);
      return(
        <SpeechBubble speaker={speaker} key={lineNum}> {text} </SpeechBubble>
      );
    } else {
      //return question component if datatype is not string
      return(
        <Question props={lineData} key={lineNum} />
      )
    }
  }

  function next(){
    //increments line number if more lines remain or level had questions, otherwise moves on to next level
    if((user.lineNum < lines.length-1) || (data.lines.map((lineData) => typeof lineData).includes('object'))){
      userDispatch({type:"nextLine"})

      //update user's prompt status if next line is question
      if(typeof data.lines[user.lineNum+1] === 'object'){
        userDispatch({type:"userPrompted"})
      }
    } else {
      userDispatch({type:"nextLevel"})
    };
  };

  return(
    <div className="flex h-dvh w-dvw">
      {/* sidebar */}
      <div className="flex-none">
        <Sidebar/>
      </div>
      <div className="flex-auto flex flex-col">
        {/* level header */}
        <h1 className="py-1 px-4 bg-pink-400 border-b-2 border-pink-600 text-2xl font-serif">
          {data.title}
        </h1>
        {/* dialogue: maps lines to html list components, which are rendered */}
        <ul className="flex-auto p-1 flex flex-col">
          {
          lines.slice(0,user.lineNum+1).map((line, i) => 
            <li key={i}>
              {line}
            </li>
          )}
        </ul>
        {
          /* next line button, not rendered if awaiting question response or last line of last level*/
          (!user.isPrompted && (user.lineNum < lines.length-1 || user.levelNum < 6)) && <NextButton handleClick={next} />
        }
      </div>
    </div>
  )
}

export default Level;