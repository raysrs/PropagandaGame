import AboutCard from "./AboutCard";
import zoe from "./zoe.jpg";
import placeholder from "./placeholder.jpg";

function About() {
  return (
    <div className="bg-blue-400">
      <div className="text-4xl font-bold text-center bg-blue-600">About Us!</div>
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
      
      
    
    
    </div>
  )
}

export default About;