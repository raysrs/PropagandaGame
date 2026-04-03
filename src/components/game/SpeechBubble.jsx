function SpeechBubble({type, children}){
  let style;

  //styling based on which charecter is speaking
  switch (type){
    case "Poppy":
      //amber and on left side if charecter is Poppy
      style = "bg-amber-400 rounded-t-xl rounded-br-xl mx-8 my-6 p-2 w-[500px]";
      break;
    case "Patricia":
      //lime and on right side if charecter is Poppy
      style = "bg-lime-500 rounded-t-xl rounded-bl-xl w-[500px] p-2 mx-8 float-right";
      break;
    case _:
      //red and centered if neither charecter is given
      style = "bg-red-400 rounded-xl w-[500px] p-2 float-center";
      break;
  }

  return(
    <div className={style} children={children} />
  )
}

export default SpeechBubble;