import React from "react";


//css 

import  './Home.css';

//components
import Title from "../../commons/Title/Title"
import Label from "../../commons/Label/Label"

import Task from "./Task/Task"


function Salir(){
    localStorage.removeItem('account')
    localStorage.removeItem('registro')
    window.location.href="/"

}
const Home = () => { return (
    <div className="home-container">
        
        <div className="submit-button-container">  
            <button onClick={Salir}className='submit-button'>
                Log out
            </button>
        </div>

        <Task></Task>
    </div> 



); }

export default Home;