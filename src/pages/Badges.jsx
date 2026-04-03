import BadgeandBlurb from "../components/BadgeandBlurb";
import { Link } from "react-router-dom";
import { cliffhangers, collocations, opposites, essentialist, disposition } from "../assets/badges";

function Badges() {
  return (
    <div className="h-dvh pb-8 bg-sky-400 font-serif">
      <div className="bg-amber-400 text-bold text-center h-[50px] text-2xl font-bold py-3">
          My Badges
      </div>
      <div className="p-6 flex flex-wrap">
        <BadgeandBlurb
          badgename="Level 1 - Noun Subjectivity + Collocations"
          image={collocations}
          blurb="Subjective nouns convey an opinion using their collocations (the associations people have with words). In contrast, objective nouns are more factual.">
        </BadgeandBlurb>
        <BadgeandBlurb
          badgename="Level 2 - Linguistic Cliffhangers"
          image={cliffhangers}
          blurb="Linguistic Cliffhangers are phrases that are incomplete, leaving the audience to fill in the blank with their own biases. The technique makes the speaker seem less biased while taking advantage of people’s preexisting prejudices.">
        </BadgeandBlurb>
        <BadgeandBlurb
          badgename="Level 3 - Language of Opposites"
          image={opposites}
          blurb="Politicians use the language of opposites to increase the believability and perceived danger of their chosen enemy. It makes the speaker seem more trustworthy, as it appears that they are telling their audience what they know currently.">
        </BadgeandBlurb>
        <BadgeandBlurb
          badgename="Level 4 - Implied Disposition"
          image={disposition}
          blurb="When disposition is implied, this means that the speaker is implying that a certain person or group may do something. However, the likelihood of the subject actually completing the action is not specified.">
        </BadgeandBlurb>
        <BadgeandBlurb
          badgename="Level 5 - Essentialist Placeholders"
          image={essentialist}
          blurb="Essentialist placeholders are the mechanisms we use to understand how certain people belong in specific groups without actually knowing why or how.">
        </BadgeandBlurb>
        <Link to="/" className="p-2 bg-pink-400 rounded-lg hover:bg-fuchsia-500 hover:font-semibold absolute right-4 bottom-4 w-[70px] text-center text-base">
        Exit
      </Link>
      </div>
    
    </div>
  )
}

export default Badges;