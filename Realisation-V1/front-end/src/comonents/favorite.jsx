import React from "react";
import axios from "axios";
import { useEffect,useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
function Favorite (){
    const [league, setLeague] = useState([]);
    
    useEffect(() => {

    axios.get('http://localhost:8000/api/listLeague')
    .then(res=>{
      console.log(res.data)
      setLeague(res.data);
    }
    )

}, []);

// const handleClick=()=>{
//     history.
// }

return(

    <div>
        {league.map(league=>
        <div >
    {/* <h2>{league.name} </h2> */}
    <h2>{league.id} </h2>
    <h2>{league.name} </h2>
    <img src={league.logo} alt="" />
     <Link  to={"/league/"+league.id} > show</Link>
    </div>
    )}
</div>
)

}
export default Favorite