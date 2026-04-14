import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { UserProvider } from "./components/UserContext";
import { About, Badges, Game, Home } from "./pages"

export default function App() {
  return(
    <BrowserRouter basename='PropagandaGame'>
      <Routes>
        <Route element={<UserProvider><Outlet /></UserProvider>}>
          <Route index element={<Home />} />        
          <Route path='/game' element={<Game />} />
          <Route path='/about' element={<About />} />
          <Route path='/badges' element={<Badges />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};