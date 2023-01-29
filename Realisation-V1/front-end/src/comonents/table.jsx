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
          var id = response.data.response[0].league.id 
          // console.log(id)
          setLeagueId(id);
          axios.get('http://localhost:8000/api/LeagueExist/'+id)
          .then(res=>{
            // console.log(res.data)
           
            
            if(res.data.message== "true"){
              const btnRemove = document.getElementById("RemoveFavorite")
              btnRemove.style.display='inline'
            }
            else{
            const btnAdd = document.getElementById("AddFavorite")
            btnAdd.style.display='inline'
            console.log('err')
          }
            // setLeague(res.data);
          }
          )
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
  const btnAdd = document.getElementById("AddFavorite")
  btnAdd.style.display='none'
  const btnRemove = document.getElementById("RemoveFavorite")
  btnRemove.style.display='inline'
}
)

} 
const RemoveLeague=(id)=>{
console.log(id)

axios.get('http://localhost:8000/api/Delete/'+id)
.then(res=>{
  console.log("success")
  const btnAdd = document.getElementById("AddFavorite")
  btnAdd.style.display='inline'
  const btnRemove = document.getElementById("RemoveFavorite")
  btnRemove.style.display='none'
}
)

} 
return (

<div>
  <div className='cadre-searsh'>
    <div class="input-group searsh-div">
      <div class="form-outline " >
        <input type="search" ref={inputRef} id="form1" class="form-control" />
        {/* <label class="form-label" for="form1">Search</label> */}
      </div>
      <button onClick={handleClick} type="button"  class="btn btn-primary">
        <i class="fas fa-search"></i>
      </button>
    </div>

    {/*league */}
    <div>
      {/* <h2>{league.name} </h2> */}
      {/* <h2>{league.id} </h2> */}
      <h2>{league.name} </h2>
      <img src={league.logo} alt="" />
    </div>
    <button onClick={()=>FavoriteLeague(league)} style={{display:"none"}} className="btn btn-primary btnFavorite " id='AddFavorite'>Add to favorite</button>
    <button onClick={()=>RemoveLeague(league.id)} style={{display:"none"}} className="btn btn-danger btnFavorite " id='RemoveFavorite'>remove in to  favorite</button>
  </div>   

  {/* table classement */}
  <div>

    <div id="wg-api-football-games" data-host="v3.football.api-sports.io" // data-key="8cc7b490ea845f35b524aef59d7e1782"
      data-date="" data-league="" data-season="" data-theme="" data-refresh="15" data-show-toolbar="true"
      data-show-errors="false" data-show-logos="true" data-modal-game="true" data-modal-standings="true"
      data-modal-show-logos="true">
    </div>
  </div>
</div>
);
}

export default LeagueTable;