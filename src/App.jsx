import TsParticlesBg from "./components/TsParticlesBg";
import Home from "./pages/Home";

const App = () => {
  return (
    <main className="relative w-full h-screen z-50 flex flex-col justify-center items-center bg-red-700">
      
      <TsParticlesBg />
      <Home />
    </main>
  );
};

export default App;
