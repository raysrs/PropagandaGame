import { useState } from "react";
import levels from "../assets/levels.json";

import Level from "../components/game/Level";
import Results from "../components/game/Results";
import Sidebar from "../components/game/Sidebar";
import NextButton from "../components/game/NextButton";

/*
to do:
  - make level remember prompts after choice made
  - change format of levels to match level 1
  - make likes update while in level
*/

function Game() {
  const [level, setLevel] = useState(0);
  const [currentPage, setCurrentPage] = useState("level");
  const [stats, setStats] = useState({totalLikes:0, byLevel:[]});

  function nextLevel(){
    setLevel(level + 1)
    setCurrentPage("level")
  }

  //called when level ends
  function handleLevelCompletion(levelStats){
    //document user's stats from level
    setStats({
      totalLikes: stats.totalLikes + levelStats.likes,
      byLevel: stats.byLevel.concat([levelStats])
    });
    if (levelStats.choices.length == 0){
      //move on to next level if level had no questions
      nextLevel();
    } else {
      //display results page if level had any questions
      setCurrentPage("results");
    };
  };

  //render level
  if (currentPage == "level") {
    return(
      <div className="flex h-dvh w-dvw">
        <div className="flex-none">
          <Sidebar likes={stats.totalLikes} />
        </div>
        <div className="flex-auto flex flex-col">
          <h1 className="p-1 border-2 bg-pink-400 font-serif">{levels[level].title}</h1>
          <div className="flex-auto p-1 border-2">
            <Level
              key={level}
              props={levels[level]}
              handleLevelCompletion={handleLevelCompletion}
            />
          </div>
        </div>
      </div>
    );
  };

  //render results page
  if (currentPage == "results") {
    return(
      <div className="flex flex-col bg-sky-400 h-[750px]">
        <h1 className="p-1 border-2 bg-pink-400 font-serif">{level.title}</h1>
        <div className="flex-auto" >
          <Results stats={stats}/>
        </div>
        <NextButton handleClick={nextLevel}> next level </NextButton>
      </div>
    );
  };
};

export default Game;