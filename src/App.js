import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./components/dasboard/home";
import Contact from "./components/contact";
import Tentang from "./components/tentang";
import Portofolio from "./components/portofolio";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/tentang" element={<Tentang />} />
        <Route path="/portofolio" element={<Portofolio />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
