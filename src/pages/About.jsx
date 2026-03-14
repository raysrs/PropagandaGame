import AboutCard from "../components/AboutCard";
import zoe from "../assets/zoe.jpg";
import placeholder from "../assets/placeholder.jpg";

function About() {
  return (
    <div className="bg-sky-400 p-4 h-[1000px] font-serif">
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
      
    
    
    </div>
  )
}

export default About;