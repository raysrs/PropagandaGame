import BadgeandBlurb from "../functions/BadgeandBlurb";

function Badges() {
  return (
    <>
      <div className="bg-orange-500 text-bold text-center h-[50px] text-2xl font-bold py-3">
          My Badges
      </div>
      <div className="bg-blue-400 p-6">
        <BadgeandBlurb
          badgename="badge name"
          blurb="blurb">
        </BadgeandBlurb>
        <BadgeandBlurb
          badgename="example"
          blurb="in progress">
        </BadgeandBlurb>
        <BadgeandBlurb
          badgename="example"
          blurb="in progress">
        </BadgeandBlurb>

      </div>
    
    </>
  )
}

export default Badges;