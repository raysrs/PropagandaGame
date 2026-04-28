import { useContext } from 'react';
import { UserContext, UserDispatchContext } from './UserContext';
import { NextButton } from './';

function Results({levelTitle}){
  const user = useContext(UserContext);
  const userDispatch = useContext(UserDispatchContext);
  const nextLevel = () => userDispatch({type:"nextLevel"});

  let levelCorrectAnswers = 0;
  let levelLikes = 0;
  for (const question of user.renderedQuestions) {
    levelCorrectAnswers += question.isCorrect ? 1 : 0;
    levelLikes += question.likesAwarded;
  }

  return(
    <div className="flex flex-col bg-sky-400 h-dvh">
      <h1 className="py-1 px-4 bg-pink-400 border-b-2 border-pink-600 text-2xl font-serif">{levelTitle}</h1>
      <div className="flex-auto font-serif text-center">
        <div className="mt-8 text-2xl font-bold">Game Stats</div>
        <div className="mt-2">Correct Answers: {levelCorrectAnswers}/3</div>
        <div className="my-2">Resulting Likes: {levelLikes}</div>
        <div>Total Likes: {user.likes}</div>
      </div>
      <NextButton handleClick={nextLevel}> next level </NextButton>
    </div>
  );
};

export default Results;