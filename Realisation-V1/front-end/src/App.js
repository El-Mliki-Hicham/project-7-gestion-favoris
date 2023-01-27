// stagir kteb ismo wac kayen f solicod wla lae  accesbti hatkon 
import logo from './logo.svg';
import './App.css';
import "./api-football.css"
import LeagueTable from './comonents/table';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Favorite from './comonents/favorite';
import League from './comonents/league';
import Test from './comonents/navbar';
import Navbar from './comonents/navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
      <Routes>
      <Route  path="/" element={<LeagueTable/>} /> 
      <Route  path="/favorite" element={<Favorite/>} /> 
      <Route  path="/League/:id" element={<League/>} /> 
      {/* <Route  path="/test" element={<Test/>} />  */}
        
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
