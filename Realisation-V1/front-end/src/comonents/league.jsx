import React from "react";
import axios from "axios";
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";




export function Person(){

  return(
      <div>
          <League name='hicham' age="21" />
       </div>
  )
}

export function League (props){
  const [league, setLeague] = useState([]);
  const [leagueId, setleagueId] = useState([]);
  const [html, setHtml] = useState(`
  <div id="wg-api-football-standings"
  data-host="v3.football.api-sports.io"
  data-key="c8cc7b490ea845f35b524aef59d7e1782"
  data-league=${props.leagueId}
         data-team=""
         data-season="2022"
         data-theme=""
         data-show-errors="false"
         data-show-logos="true"
         class="wg_loader">
         </div>
         `);
         
         let  ParamsId  = useParams();
         useEffect(() => {
           console.log(props)
           setleagueId(ParamsId.id)
        // console.log(leagueId)
    axios.get('http://localhost:8000/api/League/'+ParamsId.id)
    .then(res=>{
      console.log(res.data)
      setLeague(res.data);
    }
    )
    
    

}, []);

return(
    <div >
      <h1>ff {props.name}</h1>
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
       {/* <div  
       dangerouslySetInnerHTML={{
        __html: leagueId,
      }}
        id="wg-api-football-standings"
       data-host="v3.football.api-sports.io"
       data-key="8cc7b490ea845f35b524aef59d7e1782"
       data-league={leagueId}
       data-team=""
       data-season="2022"
       data-theme=""
       data-show-errors="false"
       data-show-logos="true"
       class="wg_loader">
   </div> */}
   <div dangerouslySetInnerHTML={{
        __html: html,
      }}>

   </div>
  
   </div>
)

}
export default League