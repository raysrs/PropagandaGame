import { useState } from "react";
import { Link } from "react-router-dom";
import GameDialogue from "../components/GameDialogue"
import levels from "../levels.json";
import placeholder from "../assets/placeholder.jpg";

function Game() {
  const [index, setIndex] = useState({level:0, line:0, action:0});
  const [renderedLines, setRenderedLines] = useState([])
  const [likes, setLikes] = useState(0);
  const level = levels[index.level]

  function nextLine(){
    setIndex({...index, line:index.line+1, action:index.action+1})
    let line = level.lines[index.line]
    
    //integer actions are interpereted as jump commands
    if (Number.isInteger(level.actions[index.action])){
      setIndex({...index, action:level.actions[index.action]})
    }

    //"clear" action clears list of rendered lines
    if (level.actions[index.action] == "clear"){
      setRenderedLines([])
      setIndex({...index, action:index.action+1})
    }

    //all other actions are lines and can be rendered
    setRenderedLines(renderedLines.concat({id:index.line, type:level.actions[index.action], text:line}))
  }

  return(
    <div className="flex">
      <Sidebar likes={likes} />
      <div className="flex-auto flex flex-col">
        <h1 className="p-1 border-2">{level.title}</h1>
        <div className="flex-auto p-1 border-2">
          <GameDialogue lines={renderedLines} />
        </div>
      </div>
    </div>
  );
};

function Sidebar({likes}) {
  return(
    <div className="w-30 h-dvh p-2 border-2">
      <img src={placeholder} alt="Poppy Ganda"></img>
      <div> Likes </div>
      <div>{likes}</div>
      <Link to="/" className="p-2 bg-gray-200 rounded-lg hover:bg-pink-200">
        Exit
      </Link>
    </div>
  );
};

export default Game;