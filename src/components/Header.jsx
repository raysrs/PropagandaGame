import { Link } from "react-router-dom";

function Header({text, hasExitButton=true}){
  return(
    <div className="border-2">
      {hasExitButton && <Link to="/"></Link>}
      <h1>{text}</h1>
    </div>
  )
};

export default Header;