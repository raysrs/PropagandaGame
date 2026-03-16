import AboutCard from "../components/AboutCard";
import zoe from "../assets/zoe.jpg";
import placeholder from "../assets/placeholder.jpg";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="bg-sky-400 p-4 h-dvh font-serif">
      <div className="text-4xl font-bold text-center rounded-lg bg-amber-400">About Us!</div>
      <div className="flex flex-wrap justify-center">
        <div>
          <AboutCard
          name="Zoe"
          picture={zoe}
          blurb="Hi">
          </AboutCard>
        </div>

        <div>
          <AboutCard
          name="Ray"
          picture={placeholder}
          blurb="Hello">
          </AboutCard>
        </div>
      
        <div className="bg-pink-400 p-4 m-4 rounded-lg grow">
          <div className="text-center text-2xl font-semibold">Our Mission</div>
          <div className="text-center">Blah, blah, blah.</div>
        </div>
      </div>
      <Link to="/" className="p-2 bg-pink-400 rounded-lg hover:bg-fuchsia-500 hover:font-semibold absolute right-4 bottom-4 w-[70px] text-center text-base">
        Exit
      </Link>
    
    
    </div>
  )
}

export default About;