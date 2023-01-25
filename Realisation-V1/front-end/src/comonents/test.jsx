import axios from "axios";
import React from "react";

function  Test(){

axios.get(" https://api-football-standings.azharimm.site/leagues/eng.1")
.then((res)=>
console.log(res.data)
)
    return (

        <div>ddd</div>
    )
}
export default Test