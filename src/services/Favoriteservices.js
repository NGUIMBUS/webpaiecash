import React from "react";
import images from "./../images/consumer.jpg";
import "./../style.css";

const Favoriteservice =()=>{
    return(
        <div className="delay-75 duration-200 ease-linear ease-in-out overflow-hidden h-52 large items-center justify-center flex">
             <div className="bckGrd p-2 h-full w-4/5 justify-center items-center flex">
                <div className="w-full h-full">
                    <h1 className="delay-75 duration-200 ease-linear ease-in-out text-white uppercase font-bold text-left font-txt h-1/4 whitespace-nowrap items-center justify-start flex sizeT">Location </h1>
                    <h2 className="delay-75 duration-200 ease-linear ease-in-out text-black uppercase font-bold text-left font-txt h-1/4 whitespace-nowrap sizeT items-center justify-start flex">Prix </h2>
                    <p className="delay-75 duration-200 ease-linear ease-in-out text-white text-left h-1/4 whitespace-nowrap sze items-start justify-start flex">Ce texte represente</p>
                    <button class="font-txt w-3/4 h-6 text-sm float-left text-center rounded-md px-2 text-white tracking-widest bg-black hover:bg-indigo-400 whitespace-nowrap active:bg-indigo-600 focus:outline-none">Résultat</button>
                </div>
            </div>
            <div className="relative h-full w-2/5 bg-green-100">
                <img className="absolute h-full w-full object-cover object-center" src={images} alt=""/>
            </div>        
        </div>
    )
}

export default Favoriteservice;