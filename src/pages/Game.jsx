import { useState } from "react";
import GameDialogue from "../components/GameDialogue"
import GameSidebar from "../components/GameSidebar"
import LevelResults from "../components/LevelResults";
import levels from "../levels.json";

function Game() {
  const [index, setIndex] = useState({level:0, line:0, action:0});
  const [renderedLines, setRenderedLines] = useState([]);
  const [likes, setLikes] = useState(0);
  const level = levels[index.level];

  function nextLine() {
    let actionIndex = index.action+1
    
    let line = level.lines[index.line]
    
    //integer actions are interpereted as jump commands
    if (Number.isInteger(level.actions[actionIndex])){
      actionIndex = level.actions[actionIndex];
    };

    //"clear" action clears list of rendered lines
    if (level.actions[index.action] == "clear"){
      setRenderedLines([]);
      actionIndex++;
    };

    //all other actions are lines and can be rendered
    setRenderedLines(renderedLines.concat({id:index.line, type:level.actions[index.action], text:line}))
    setIndex({...index, line:index.line+1, action:actionIndex})
  };

  function seeResults(){
    setRenderedLines([])
    setIndex({...index, line:index.line+1})
  };

  //returns results page if there are no more lines in lesson
  if (index.line == level.lines.length) {
    return(
      <div className="flex flex-col">
        <h1 className="p-1 border-2">{level.title}</h1>
        <div className="flex-auto" >
          <LevelResults 
            likes={likes}
          />
        </div>
      </div>
    );
  };

  //default return
  return(
    <div className="flex">
      <GameSidebar likes={likes} />

      <div className="flex-auto flex flex-col">
        <h1 className="p-1 border-2">{level.title}</h1>
        <div className="flex-auto p-1 border-2">
          <GameDialogue lines={renderedLines} />
        </div>
        <div className="absolute bottom-4 right-4">
          {(index.line < level.lines.length)
            ? <button className="p-2 bg-gray-200 rounded-lg hover:bg-pink-200" onClick={nextLine}> next </button>
            : <button className="p-2 bg-gray-200 rounded-lg hover:bg-pink-200" onClick={seeResults}> see results </button>
          }
        </div>
      </div>
    </div>
  );
};



export default Game;