import React from "react";
import images from "./../images/logo_p-white.png";

const Imagefooter = () =>{
    return(
        <span className="w-full h-96 lg:w-1/4 lg:h-full">
            <h1 className="font-txt text-white font-semibold h-8 px-5 text-md uppercase w-5/6 m-auto items-center justify-center flex">notre application</h1>
            <span className="py-2 w-5/6 m-auto justify-center items-center flex">
                <img className="w-12 h-12" src={images} alt=""/>
                <h3 className="h-12 px-2 whitespace-pre-line text-white font-semibold text-3sm w-4/6 items-center justify-center flex">Interdiction de se sucrer ici !</h3>
            </span>
        </span>
    )
}
export default Imagefooter;