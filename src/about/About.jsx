import AboutCard from "./AboutCard";
import zoe from "./zoe.jpg";
import placeholder from "./placeholder.jpg";

function About() {
  return (
    <div className="bg-blue-400 p-4">
      <div className="text-4xl font-bold text-center rounded-lg bg-blue-600">About Us!</div>
      <div className="flex items-stretch">
        <AboutCard
        name="Zoe"
        picture={zoe}
        blurb="Hi">
        </AboutCard>

        <AboutCard
        name="Ray"
        picture={placeholder}
        blurb="Hello">
        </AboutCard>
      </div>
      <div className="bg-pink-300 p-4 m-4 rounded-lg">
        <div className="text-center text-2xl font-semibold">Our Mission</div>
        <div className="text-center">Blah, blah, blah.</div>
      </div>
      
    
    
    </div>
  )
}

export default About;