function NextButton({ handleClick, children="next" }) {
  return(
    <button 
      className="absolute bottom-4 right-4 p-2 bg-pink-400 rounded-lg font-serif hover:bg-fuchsia-500 hover:font-semibold"
      onClick={handleClick}
      children={children}
    />
  )
}

export default NextButton;