import TsParticlesBg from "./components/TsParticlesBg";
import Home from "./pages/Home";
import ArtistDetail from "./pages/ArtistDetail" 
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<ArtistDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
/*   */
