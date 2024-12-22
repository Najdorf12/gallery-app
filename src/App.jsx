import TsParticlesBg from "./components/TsParticlesBg";
import Home from "./pages/Home";
import ArtistDetail from "./pages/ArtistDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { artistsData } from "./data/artistsData";
import Project from "./pages/Project";
import Plano from "./pages/Plano";
import Registro from "./pages/Registro";
import Contact from "./pages/Contact";

const App = () => {
  console.log("DESIGN BY NAJDORF")
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home artistsData={artistsData} />} />
          <Route path="/proyecto" element={<Project />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/plano" element={<Plano />} />
          <Route path="/contacto" element={<Contact />} />
          <Route
            path="/artist/:id"
            element={<ArtistDetail artistsData={artistsData} />}
          /> 
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
/*   */
