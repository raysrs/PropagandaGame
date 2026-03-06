import { useState } from "react"
import Info from "./components/Info"
import Lesson from "./components/Lesson"
import Question from "./components/Question"
import Reaction from "./components/Reaction"

function Game() {
  const [page, setPage] = useState(0);
  const nextPage = () => setPage(page + 1);

  return(
    <div>
      {[<Info />, <Lesson />, <Question />, <Reaction />][page]}

      <button onClick={nextPage} className="p-2 bg-gray-200 rounded-lg hover:bg-pink-200">
      next page
      </button>
    </div>
  );
};


export default Game;