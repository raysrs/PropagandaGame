import { Link } from "react-router-dom";
import patricia from "../../assets/patricia.jpg"

function Sidebar({likes}) {
  return(
    <div className="w-xs h-dvh p-2 border-2 font-serif bg-sky-400 text-xl">
     <div className="h-[150px] w-[150px] overflow-hidden flex mx-[70px] mt-2">
       <img className="h-full w-full object-cover object-center rounded-full" src={patricia} alt="Patricia Politician"></img>
       </div>
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

       <div className="w-[300px] flex justify-center my-8">
       <Link to="/" className="p-2 mt-[40px] mx-8 bg-pink-400 rounded-lg hover:bg-fuchsia-500 hover:font-semibold text-center text-xl text-base w-[150px]">
         Home
       </Link>
     </div>


     <div className="w-[300px] flex justify-center my-8">
       <Link to="/badges" className="p-2 bg-pink-400 rounded-lg hover:bg-fuchsia-500 hover:font-semibold text-center text-xl text-base w-[150px]">
         View Badges
       </Link>
     </div>
     <div className="w-[300px] flex justify-center my-8"> 
       <Link to="/about" className="p-2 bg-pink-400 rounded-lg hover:bg-fuchsia-500 hover:font-semibold text-center text-xl text-base w-[150px]">
         About Us
       </Link>
     </div>

    </div>
  );
};

export default Sidebar