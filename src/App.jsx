import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Anime, AllArt, GraveYardGang, About } from './index';
import NavBar from './components/NavBar'

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="graveyardgang" element={<GraveYardGang />} />
        <Route path="anime" element={<Anime />} />
        <Route path="allart" element={<AllArt />} />
        <Route path="about" element={<About />} />
        {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

