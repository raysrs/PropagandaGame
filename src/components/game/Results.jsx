function Results({stats}){
  return(
    <div className="font-serif text-center">
      <div className="mt-8 text-2xl font-bold">Game Stats</div>
      <div className="mt-2">Correct Answers: {stats.byLevel.at(-1).correctAnswers}/3</div>
      <div className="my-2">Resulting Likes: {stats.byLevel.at(-1).likes}</div>
      <div>Total Likes: {stats.totalLikes}</div>
    </div>
  );
};

export default Results;