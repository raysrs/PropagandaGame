import { useContext } from 'react';
import levels from "../assets/levels.json";

import { UserContext } from '../components/game/UserContext';
import { Level, Results} from "../components/game"

export default function Game(){
  const user = useContext(UserContext);
  const levelData = levels[user.levelNum]
  
  if (user.lineNum < levelData.lines.length) {
    return(
      //returns the current level if level has more content
      <Level key={user.levelNum} data={levelData} />
    )
  }

  //if line number exceeds lines in level, show results
  return <Results levelTitle={levelData.title}/>;
};
