import React from "react";

//assets
import pulpo from '../../assets/img/pulpo.png';

//css

import  './Img.css';

const Img = () => { 
    return (
        <div>
            <img className="pulpo" src={pulpo}/>
        </div>

    ); 
}

export default Img;