import { useState } from "react";
import {Lesson, Question, Reaction, LevelResults} from "../components/gamePages";
import Sidebar from "../components/gameSidebar";
import Header from "../components/Header";


function Game() {
  const [page, setPage] = useState(0);
  const [likes, setLikes] = useState(0);
  const nextPage = () => setPage(page + 1);
  const addLikes = (num) => setLikes(likes + num)

  return(
    <div className="h-dvh">
      <Header text="Level 2 - Linguistic Cliffhangers" hasExitButton={false} />
      <div className="flex">
        <Sidebar likes={likes} className="flex-initial" />
        <div className="flex-auto border-2">
          {[<Lesson />, <Question />, <Reaction />, <LevelResults />][page]}
        </div>
      </div>
    </div>
  );
};

export default Game;