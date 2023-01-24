// stagir kteb ismo wac kayen f solicod wla lae  accesbti hatkon 
import logo from './logo.svg';
import './App.css';
import LeagueTable from './comonents/table';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Favorite from './comonents/favorite';
import League from './comonents/league';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route  path="/" element={<LeagueTable/>} /> 
      <Route  path="/favorite" element={<Favorite/>} /> 
      <Route  path="/League/:id" element={<League/>} /> 
        
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
