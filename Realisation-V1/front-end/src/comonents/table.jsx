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

  // useEffect(() => {
  
       
    
  //   const API_KEY = '8cc7b490ea845f35b524aef59d7e1782';
  //  const SelectLeague=()=>{
  //   const URL = `https://v3.football.api-sports.io/leagues?search=la liga`;

  //   axios.get(URL, {
  //       headers: {
  //         // "X-RapidAPI-Key": "8cc7b490ea845f35b524aef59d7e1782",
  //         "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com"
  //       }
  //     })
  //     .then(response => {
  //         console.log(response.data.response)
  //         setLeague(response.data.response[0].league);
  //         var x = response.data.response[0].league.id 
  //         // var xS = x.toString(response.data.response[0].league.id)
  //         console.log(x.toString())
  //         // console.log(typeof xS);
  //         setIdLeague(x);
  //         let dataSeasons =  response.data.response[0].seasons
  //          let lastSeasons =dataSeasons.pop()
  //         // console.log(lastSeasons)
  //       LastSeasons(lastSeasons);
  //   })
  //     .catch(error => {
  //       console.log(error);
  //     });
  //   }
  //   SelectLeague();
  // }, []);
  
  return (
   
   <div>
    <input ref={inputRef} type="text" />
    <button onClick={handleClick}>click</button>
        {/*league  */}
         <div>
            {/* <h2>{league.name} </h2> */}
            <h2>{leagueid} </h2>
            <h2>{league.id} </h2>
            <h2>{league.name} </h2>
            <img src={league.logo} alt="" />
            <button onClick={()=>FavoriteLeague(league)}>add</button>
        </div>
        {/* table classement */}
        <div>

<div id="wg-api-football-fixtures"
                    data-host="v3.football.api-sports.io"
                    data-refresh="60"
                    data-date="2022-02-11"
                    data-key="8cc7b490ea845f35b524aef59d7e1782"
                    data-theme="false"
                    data-show-errors="false"
                    class="api_football_loader">
        </div>
        </div>
    </div>
  );
}

export default LeagueTable;



