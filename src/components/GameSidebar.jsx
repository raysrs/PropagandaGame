import { Link } from "react-router-dom";
import placeholder from "../assets/placeholder.jpg";

function GameSidebar({likes}) {
  return(
    <div className="w-xs h-dvh p-2 border-2">
      <img src={placeholder} alt="Poppy Ganda"></img>
      <div> Likes </div>
      <div>{likes}</div>
      <Link to="/" className="p-2 bg-gray-200 rounded-lg hover:bg-pink-200">
        Exit
      </Link>
    </div>
  );
};

export default GameSidebar