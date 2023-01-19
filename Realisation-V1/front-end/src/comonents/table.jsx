import axios from 'axios';
import React, { useState, useEffect } from 'react';
function LeagueTable() {
  const [league, setLeague] = useState([]);
  const [seasons, LastSeasons] = useState([]);

  useEffect(() => {
    // const API_KEY = '8cc7b490ea845f35b524aef59d7e1782';
   const SelectLeague=()=>{
    const URL = `https://v3.football.api-sports.io/leagues?id=39`;

    axios.get(URL, {
        headers: {
        //   "X-RapidAPI-Key": "8cc7b490ea845f35b524aef59d7e1782",
          "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com"
        }
      })
      .then(response => {
          console.log(response.data.response)
          setLeague(response.data.response[0].league);
          let dataSeasons =  response.data.response[0].seasons
           let lastSeasons =dataSeasons.pop()
          console.log(lastSeasons)
        LastSeasons(lastSeasons);
    })
      .catch(error => {
        console.log(error);
      });
    }
    SelectLeague();
  }, []);
  return (
   
   <div>
        {/*league  */}
         <div>
            <h2>{league.name} </h2>
            <h2>{league.name} </h2>
            <img src={league.logo} alt="" />
        </div>
        {/* table classement */}
        <div>
        <div id="wg-api-football-standings"
    data-host="v3.football.api-sports.io"
    // data-key="8cc7b490ea845f35b524aef59d7e1782"
    data-league='`${league.id}`'
    data-team=""
    data-season="2022"
    data-theme=""
    data-show-errors="false"
    data-show-logos="true"
    class="wg_loader">
</div>
            {/* <li>{seasons.year} </li>
            <li>{seasons.start} </li>
            <li>{seasons.end} </li> */}
            {/* <li>{seasons.year} </li> */}
        </div>
    </div>
  );
}

export default LeagueTable;
// Please make sure to replace the your_api_key placeholder in the code with your actual API key from API-Football, also make sure to check the terms of use of API-Football.

// Also, you should handle error cases and pagination if the API has a rate limit.

// This code is just an example and you may need to modify it to suit your specific requirements and design choices. You can use this code as a starting point and build on it to make it more complex and complete.




