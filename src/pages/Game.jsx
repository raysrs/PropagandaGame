import { useState } from "react";
import { Link } from "react-router-dom";
import { Lesson, Question, Reaction, LevelResults } from "../components/gamePages";
import placeholder from "../assets/placeholder.jpg";

function Game() {
  const [index, setIndex] = useState({level:0, page:0});
  const [likes, setLikes] = useState(0);
  
  return(
    <div className="flex">
      <Sidebar likes={likes} />
      <div className="flex-auto flex flex-col">
        <h1 className="p-1 border-2">Level 2 - Linguistic Cliffhangers</h1>
        <div className="flex-auto p-1 border-2">
          {[<Lesson />, <Question />, <Reaction />, <LevelResults />][index.page]}
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