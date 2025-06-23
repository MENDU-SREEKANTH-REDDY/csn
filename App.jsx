import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Itstaffing from "./components/Itstaffing";
import Rpo from "./components/Rpo";
import Bpo from "./components/Bpo"; 
import Team from "./components/Team";
// import Contact from "./components/Contact";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/staffing" element={<Itstaffing />} />
        <Route path="/RPO" element={<Rpo />} />
        <Route path="/BPO" element={<Bpo />} /> 
        <Route path="/team" element={<Team/>}/>
        {/* <Route path="/contact" element={<Contact/>}/> */}
      </Routes>
    </Router>
  );
}

export default App;
