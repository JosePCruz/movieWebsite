import React, {useState} from "react";
import {errorCheck} from '../../Services/useful';
import './RegisterCard.css';

import logo from '../../Images/kununu-logo-vector.png';

const RegisterCard = () => {

    const [user,setState] = useState({
        email: '',
        phone: '',
        password: '',
        name: ''
    })

    const inputHandler = (e) =>{
        //Binding up the handler

    }

    return(

        <div className="registerCardDesign">
            <div className="registerCardUp">
                <img className='logoDesign' src={logo}></img>
            </div>
            <div className="registerCardMiddle">

                {/*Here we are going to operate the inputs*/}
                <input type='' name='email' className="" onChange={(e)=>inputHandler(e)} onBlur={(e)=>errorCheck(e.target.value)}></input>
                <input type='' name='phone' className="" onChange={(e)=>inputHandler(e)} onBlur={(e)=>errorCheck(e.target.value)}></input>
                <input type='' name='password' className="" onChange={(e)=>inputHandler(e)} onBlur={(e)=>errorCheck(e.target.value)}></input>
                <input type='' name='name' className="" onChange={(e)=>inputHandler(e)} onBlur={(e)=>errorCheck(e.target.value)}></input>

            </div>
            <div className="registerCardBottom"></div>
        </div>
    )

}
export default RegisterCard;