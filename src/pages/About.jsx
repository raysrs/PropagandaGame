import AboutCard from "../components/AboutCard";
import zoe from "../assets/zoe.jpg";
import example from "../assets/example.jpg";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="bg-sky-400 p-4 h-dvh font-serif">
      <div className="text-4xl font-bold text-center rounded-lg bg-amber-400">About Us!</div>
      <div className="flex flex-wrap justify-center">
        <div>
          <AboutCard
          name="Zoe"
          picture={zoe}
          blurb="Hi, my name is Zoe, and I was in charge of the style and content creation for this game. In my free time, I enjoy drawing, dancing and reading the classics.">
          </AboutCard>
        </div>

        <div>
          <AboutCard
          name="Ray"
          picture={example}
          blurb="Hello, my name is Ray, and I figured out all of the coding for this project. In my free time, I enjoy ceramics, ultimate frisbee, and engineering cool tools. [Ray, please change this if you want]">
          </AboutCard>
        </div>
      
        <div className="bg-pink-400 p-4 m-4 rounded-lg grow">
          <div className="text-center text-2xl font-semibold">Our Mission</div>
          <div className="text-center">Propaganda is constantly expanding, especially with modern technology and social media. Politicians make their propaganda so effective by using linguistic tricks that most people don't even notice. In this game, we are teaching people these tricks so that they can recognize them in their real lives.</div>
        </div>
      </div>
      <Link to="/" className="p-2 bg-pink-400 rounded-lg hover:bg-fuchsia-500 hover:font-semibold absolute right-4 bottom-4 w-[70px] text-center text-base">
        Exit
      </Link>
    
    
    </div>
  )
}