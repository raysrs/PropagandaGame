import { useContext } from 'react';
import { UserContext, UserDispatchContext } from '../UserContext';
import { NextButton } from './';

function Results({levelTitle}){
  const user = useContext(UserContext);
  const userDispatch = useContext(UserDispatchContext);
  const nextLevel = () => userDispatch({type:"nextLevel"});

  return(
    <div className="flex flex-col bg-sky-400 h-dvh">
      <h1 className="py-1 px-4 bg-pink-400 border-b-2 border-pink-600 text-2xl font-serif">{levelTitle}</h1>
      <div className="flex-auto font-serif text-center">
        <div className="mt-8 text-2xl font-bold">Game Stats</div>
        <div className="mt-2">Correct Answers: {user.levelCorrectAnswers}/3</div>
        <div className="my-2">Resulting Likes: {user.levelLikes}</div>
        <div>Total Likes: {user.likes}</div>
      </div>
      <NextButton handleClick={nextLevel}> next level </NextButton>
    </div>
  );
};

export default Results;