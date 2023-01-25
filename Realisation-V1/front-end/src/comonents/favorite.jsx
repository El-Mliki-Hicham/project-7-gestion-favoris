import React from "react";
import axios from "axios";
import {
    useEffect,
    useState
} from "react";
import {
    BrowserRouter,
    Link,
    Route,
    Routes
} from "react-router-dom";


function Favorite() {
    const [league, setLeague] = useState([]);
    // fetch list favorite lige  
    useEffect(() => {
        axios.get('http://localhost:8000/api/listLeague')
            .then(res => {
                console.log(res.data)
                setLeague(res.data);
            })

    }, []);

const handleDelete = (id) =>{
    axios.get('http://localhost:8000/api/Delete/'+id)
    .then(res => {
        console.log("delete")
    })
}

    return(
        <div className="content">
             {/* <!-- title --> */}
       <div class="p-5 text-center">
         <h1 class="mb-3">Favortite leagues</h1>
         <h4 class="mb-3"></h4>
       </div>
       {/* <!-- title --> */}
            <div className="d-flex bd-highlight ">
                {/* afficher les leagues */}
                {league.map(league=>
                <div className="  p-2 flex-fill bd-highlight  cadre-league">
                    <div className="title">
                        <h2>{league.name} </h2>
                        <img src={league.logo} alt="" />
                    </div>
                    <div className="btnDiv">
                        <Link className="btnLink btn btn-warning" to={"/league/"+league.id}> show</Link>
                        <btn className="btnLink btn btn-danger"  onClick={()=>handleDelete(league.id)}> remove</btn>
                    </div>
                </div>
                )}
                {/* end loop */}
            </div>
        </div>
        )
        
        }
        export default Favorite