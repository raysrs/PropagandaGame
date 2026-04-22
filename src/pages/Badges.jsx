import { Link } from "react-router-dom";
import { useContext } from "react";

import levels from "../assets/levels.json";
import badgeIcons from "../assets/badgeIcons";

import { UserContext } from "../components/UserContext";
import { BadgeandBlurb, BlankBadgeandBlurb } from "../components/BadgeandBlurb";

export default function Badges() {
  const user = useContext(UserContext);
  const badgeBlurbs = [
    "Subjective nouns convey an opinion using their collocations (the associations people have with words). In contrast, objective nouns are more factual.",
    "Linguistic Cliffhangers are phrases that are incomplete, leaving the audience to fill in the blank with their own biases. The technique makes the speaker seem less biased while taking advantage of people's preexisting prejudices.",
    "Politicians use the language of opposites to increase the believability and perceived danger of their chosen enemy. It makes the speaker seem more trustworthy, as it appears that they are telling their audience what they know currently.",
    "When disposition is implied, this means that the speaker is implying that a certain person or group may do something. However, the likelihood of the subject actually completing the action is not specified.",
    "Essentialist placeholders are the mechanisms we use to understand how certain people belong in specific groups without actually knowing why or how."
  ]

  let i = 0
  let badgeList = []
  while(i < levels.length-2){
    badgeList.push(
      <BadgeandBlurb
        badgename={levels[i+1].title}
        image={badgeIcons[i]}
        blurb={badgeBlurbs[i]}
      />
    )
    i++;
  }

  return (
    <div className="h-lvh pb-8 bg-sky-400 font-serif">
      <div className="bg-amber-400 text-bold text-center h-[50px] text-2xl font-bold py-3">
          My Badges
      </div>
      <ul className="p-6 flex flex-wrap">
        {badgeList.map((badge, i) => 
          (user.levelNum > i+1)
            ? <li key={i}> {badge} </li>
            : <li key={i}> <BlankBadgeandBlurb /> </li>
        )}
        <li>
          <Link to="/" className="p-2 bg-pink-400 rounded-lg hover:bg-fuchsia-500 hover:font-semibold absolute right-4 bottom-4 w-[70px] text-center text-base">
            Exit
          </Link>
        </li>
      </ul>
    </div>
  );
};