import React from "react";
import axios from "axios";
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom"
import Favorite from "./favorite";





const  League =({ leagueIdD })=>{
  const [league, setLeague] = useState([]);
  const [leagueId, setleagueId] = useState([]);
         let  ParamsId  = useParams();
         useEffect(() => {
           setleagueId(ParamsId.id)
    axios.get('http://localhost:8000/api/League/'+ParamsId.id)
    .then(res=>{
      console.log(res.data)
      setLeague(res.data);
    }
    )
     
  }, []);

return(
    <div >
     
    <div>
        {league.map(league=>
        <div>
    {/* <h2>{league.name} </h2> */}
    <h2>{league.id} </h2>
    <h2>{league.name} </h2>
    <img src={league.logo} alt="" />
    </div>
    )}
</div  >
     
   <div>
   <div id="wg-api-football-standings"
  data-host="v3.football.api-sports.io"
  data-key="8cc7b490ea845f35b524aef59d7e1782"
  data-league={leagueId}
         data-team=""
         data-season="2022"
         data-theme=""
         data-refresh="1"
         data-show-errors="false"
         data-show-logos="true"
         class="wg_loader">
         </div>
   </div><script
    type="module"
    src="https://widgets.api-sports.io/2.0.3/widgets.js">
</script>
   
   </div>
)

}


export default League