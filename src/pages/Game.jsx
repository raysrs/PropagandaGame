import {useState} from 'react';
import levels from "../assets/levels.json";

import Level from "../components/game/Level";
import Sidebar from "../components/game/Sidebar";
import Results from "../components/game/Results";
import NextButton from "../components/game/NextButton";


function Game(){
  const [index, setIndex] = useState({level:0, line:0, likes:0})
  const [levelStats, setLevelStats] = useState({correctAnswers:0, likes:0})
  const levelData = levels[index.level]

  function nextLevel() {
    setIndex({...index, level:index.level+1, line:0})
    setLevelStats({correctAnswers:0, likes:0})
  }

  function rewardAnswer(isCorrect) {
    const likesRewarded = Math.floor(isCorrect ? (Math.random() * 20 + 90) : (Math.random() * 10 + 1));
    setIndex({...index, likes:index.likes+likesRewarded});
    setLevelStats({
      correctAnswers: levelStats.correctAnswers + (isCorrect ? 1 : 0),
      likes: levelStats.likes + likesRewarded
    })
  }
  
  if (index.line < levelData.lines.length) { return(
    //returns the current level if level has more content
    <div className="flex h-dvh w-dvw">
       <div className="flex-none">
        <Sidebar likes={index.likes} />
      </div>
      <div className="flex-auto flex flex-col">
        <h1 className="py-1 px-4 bg-pink-400 border-b-2 border-pink-600 text-2xl font-serif">{levelData.title}</h1>
        <div className="flex-auto p-1">
          <Level
            key={index.level}
            data={levelData}
            index={index}
            setIndex={setIndex}
            rewardAnswer={rewardAnswer}
          />
        </div>
      </div>
    </div>
  )}

  if(levelData.lines.map((lineData) => typeof lineData).includes('object')){
    //once level is over, returns results page if there were any questions in the level
    return(
      <div className="flex flex-col bg-sky-400 h-[750px]">
        <h1 className="p-1 bg-pink-400 font-serif">{levelData.title}</h1>
        <div className="flex-auto" >
          <Results index={index} levelStats={levelStats}/>
        </div>
        <NextButton handleClick={nextLevel}> next level </NextButton>
      </div>
    )
  } else {
    nextLevel();
  }
};

export default Game;
