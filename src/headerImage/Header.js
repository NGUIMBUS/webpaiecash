import React from "react";
import images from './../images/consumer.jpg';


function Header(){
    return(
        <div className="relative w-full h-full">
            <img className="absolute w-full h-full object-cover" src={images} alt=""/>
        </div>
    )
}

export default Header;