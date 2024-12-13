import TsParticlesBg from "./components/TsParticlesBg";
import Home from "./pages/Home";
import ArtistDetail from "./pages/ArtistDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { artistsData } from "./data/artistsData";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home artistsData={artistsData} />} />
          <Route
            path="/:id"
            element={<ArtistDetail artistsData={artistsData} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
/*   */
