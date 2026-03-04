import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Play from "./pages/Play";
import Badges from "./pages/Badges";

function App() {
  return (
    <BrowserRouter>
      {/* establish page routing configuration */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/play' element={<Play />} />
        <Route path='/badges' element={<Badges />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
