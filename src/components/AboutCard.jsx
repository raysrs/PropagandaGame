function AboutCard({name, picture, blurb}) {
  return (
    <div className="bg-pink-300 w-[300px] p-4 m-4 rounded-lg">
      <div className="text-2xl font-semibold text-center">{name}</div>
      <img class="mx-auto" src={picture} alt= "picture" width="200px"></img>
      <div className="text-lg text-center">{blurb}</div>
    </div>
  )
}

export default AboutCard;