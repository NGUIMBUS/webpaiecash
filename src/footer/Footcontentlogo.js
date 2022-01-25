import React from "react";
import image from "./../images/logo_white.png";
import images from "./../images/text_logo_white.png";

const Footcontentlogo = () =>{
    return(
        <span className="w-1/4 h-full p-0 float-center">
            <img className="w-44 h-40 m-auto" src={images} alt=""/>
            <img className="w-24 h-24 m-auto -my-5 object-cover object-contain rounded-full" src={image} alt=""/>
        </span>
    )
}
export default Footcontentlogo;