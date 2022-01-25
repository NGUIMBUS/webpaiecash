import React from "react";
import images from "./../images/soldier.jpg"

const Activitiewall =()=>{
    return(
        <div className="delay-75 duration-200 ease-linear ease-in-out relative inline-block imgH larg">
                <img className="absolute w-full h-full" src={images} alt=""/>
                <div className="absolute w-full h-full bg-black opacity-30">
                    
                </div>
                <div className="absolute w-full h-full items-end justify-center flex">
                    <div className="mb-3 w-full text-center">
                    <h1 className="text-white text-center w-full font-bold size px-5">CMR - BRK FASO</h1>
                    <p className="text-white text-center w-full font-bold size px-5">CAN 2022</p>
                </div>
           </div>
        </div>
    )
}

export default Activitiewall;