function LevelResults({likes}){
  return(
    <div className="font-serif text-center">
      <div className="mt-8 text-2xl font-bold">Game Stats</div>
      <div className="mt-2">Correct Answers: #/3</div>
      <div className="my-2">Resulting Likes: {likes}</div>
      <div>Total Likes: //something here//</div>
    </div>
  );
};

export default LevelResults;