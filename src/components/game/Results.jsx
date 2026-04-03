function Results({index, levelStats}){
  return(
    <div className="font-serif text-center">
      <div className="mt-8 text-2xl font-bold">Game Stats</div>
      <div className="mt-2">Correct Answers: {levelStats.correctAnswers}/3</div>
      <div className="my-2">Resulting Likes: {levelStats.likes}</div>
      <div>Total Likes: {index.likes}</div>
    </div>
  );
};

export default Results;