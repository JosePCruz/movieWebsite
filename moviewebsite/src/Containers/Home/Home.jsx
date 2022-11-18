import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {

    const navigate = useNavigate();

    return(
        <div className="homeDesign">

            <div className="linkDesign" onClick={()=>navigate('/login')}>Login</div>
            <div className="linkDesign" onClick={()=>navigate('/register')}>Register</div>
        </div>
    )

}
export default Home;