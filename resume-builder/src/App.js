import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Cvedit from "./pages/Cvedit";
import History from "./pages/History";
import Create from "./pages/Create";
import Final from "./pages/Final";
// import Template from "./pages/Templates/Template"
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <Navbar />
      <div className="container">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/create" element={<Create />} />
          <Route path="/cvedit" element={<Cvedit />} />
          {/* <Route path="/template" element={<Template />} /> */}
          <Route path="/final" element={<Final />} />
          <Route path="/about" element={<About />} />
        </Routes>
        
      </div>
    </>
  );
}

export default App;
