import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Badges from "./pages/Badges";
import Game from "./pages/Game";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />        
        <Route path='/game' element={<Game />} />
        <Route path='/about' element={<About />} />
        <Route path='/badges' element={<Badges />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
