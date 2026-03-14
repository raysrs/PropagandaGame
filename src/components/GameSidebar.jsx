import { Link } from "react-router-dom";
import placeholder from "../assets/placeholder.jpg";

function GameSidebar({likes}) {
  return(
    <div className="w-xs h-dvh p-2 border-2 font-serif bg-sky-400 text-xl">
      <img src={placeholder} alt="Patricia Politician"></img>
      <div className="text-center">
        Patricia Politician
      </div>

      <div className= "text-2xl mr-[200px] text-center mt-8 w-[300px]"> 
        Likes: 
      </div>
      <div className="w-[300px] flex justify-center">
        <div className="bg-amber-400 w-[70px] h-[70px] text-center text-2xl py-4">
          {likes}
        </div>
      </div>

      <Link to="/" className="p-2 bg-pink-400 rounded-lg hover:bg-fuchsia-500 absolute left-4 bottom-4 w-[70px] text-center text-base">
        Exit
      </Link>
    </div>
  );
};

export default GameSidebar