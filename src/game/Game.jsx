import { useState } from "react";
import { Link } from "react-router-dom";
import Lesson from "./components/Lesson";
import Question from "./components/Question";
import Reaction from "./components/Reaction";
import LevelResults from "./components/LevelResults";

function Game() {
  const [page, setPage] = useState(0);
  const [likes, setLikes] = useState(0);
  const nextPage = () => setPage(page + 1);
  const addLikes = (num) => setLikes(likes + num)

  return(
    <div className="flex h-dvh">
      <SideBar likes={likes} className="flex-initial"/>
      <div className="flex-auto border-2">
        {[<Lesson />, <Question />, <Reaction />, <LevelResults />][page]}
      </div>
    </div>
  );
};

function SideBar({likes}) {
  return(
    <div className="w-max-xs p-2 border-solid border-2">
      <img src="none" alt="Poppy Ganda"></img>
      <div> Likes </div>
      <div>{likes}</div>
      <Link to="/" className="p-2 bg-gray-200 rounded-lg hover:bg-pink-200">
        Exit
      </Link>
    </div>
  );
};

export default Game;