import { useState  } from "react";
import "./App.css";
import Home from './components/Home';
import MatchDetails from "./components/MatchDetails";
import { Routes, Route } from'react-router-dom';
import PointTable from "./components/PointTable";
import Navbar from "./components/Navbar";

function App() {
  
  return(
    <div className="w-full min-h-screen mx-auto bg-black">
    <Routes>
      <Route path="/" element={<Navbar/>}>
        <Route path="/" element={<Home />} />

        <Route path="/PointTable" element={<PointTable/>} />
        <Route path="/news" element={<h1>Coming Soon...</h1>} />
        <Route path="/matchDetails/:id" element={<MatchDetails/>} />
        </Route>
        
    </Routes>
    </div>
  )
}

export default App;
