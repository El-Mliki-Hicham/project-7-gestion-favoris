import axios from "axios";
import React from "react";

function  Navbar(){

axios.get(" https://api-football-standings.azharimm.site/leagues/eng.1")
.then((res)=>
console.log(res.data)
)
    return (
      <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Footbal League</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="/">Home <span class="sr-only"></span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/favorite">Favorite</a>
            </li>
          </ul>
        </div>
      </nav>
      
    </header>
    )
}
export default Navbar