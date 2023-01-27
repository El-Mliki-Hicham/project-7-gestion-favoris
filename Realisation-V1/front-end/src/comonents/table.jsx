import axios from 'axios';
import React, { useState, useEffect,useRef } from 'react';
function LeagueTable() {
  const [league, setLeague] = useState([]);
  const [seasons, LastSeasons] = useState([]);
  const [IdLeague, setIdLeague] = useState("");
  const [leagueid, setLeagueId] = useState(40);

  const inputRef =  useRef();



const handleClick=()=>{
    // console.log(inputRef.current.value)
    const valueInput =  inputRef.current.value 
      const SelectLeague=()=>{
    const URL = `https://v3.football.api-sports.io/leagues?search=`+ valueInput; 

    axios.get(URL, {
        headers: {
          // "X-RapidAPI-Key": "8cc7b490ea845f35b524aef59d7e1782",
          "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com"
        }
      })
      .then(response => {
          console.log(response.data.response)
          setLeague(response.data.response[0].league);
          var x = response.data.response[0].league.id 
          console.log(x)
          setLeagueId(x);
    })
      .catch(error => {
        console.log(error);
      });
    }
    SelectLeague();
}
const FavoriteLeague=(data)=>{
console.log(data)

axios.post('http://localhost:8000/api/addToFavorite',data)
.then(res=>{
  console.log("success")
}
)

} 
  return (
   
   <div>
    <input ref={inputRef} type="text" />
    <button onClick={handleClick}>click</button>
        {/*league  */}
         <div>
            {/* <h2>{league.name} </h2> */}
            <h2>{league.id} </h2>
            <h2>{league.name} </h2>
            <img src={league.logo} alt="" />
            <button onClick={()=>FavoriteLeague(league)}>add</button>
        </div>
        {/* table classement */}
        <div>

        <div id="wg-api-football-games"
     data-host="v3.football.api-sports.io"
     data-key="8cc7b490ea845f35b524aef59d7e1782"
     data-date=""
     data-league=""
     data-season=""
     data-theme=""
     data-refresh="15"
     data-show-toolbar="true"
     data-show-errors="false"
     data-show-logos="true"
     data-modal-game="true"
     data-modal-standings="true"
     data-modal-show-logos="true">
</div>
</div>
    </div>
  );
}

export default LeagueTable;



