import React from "react";


//css 

import  './Home.css';

//components
import Title from "../../commons/Title/Title"
import Label from "../../commons/Label/Label"


function Salir(){
    localStorage.removeItem('account')
    window.location.href="/"

}
const Home = () => { return (
    <div className="home-container">


        <Title Text="Pulpomania">

        </Title>
        <Label text="Bienvenido a mi pequeña api, "/>

        <div className="submit-button-container">  
                <button onClick={Salir}className='submit-button'>
                        Log out
                    </button>
                </div>
    </div> 



); }

export default Home;