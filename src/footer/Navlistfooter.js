import React from "react";
import Menu from "./Menu";

const Navlistfooter=()=>{
    return(
        <span className="w-full md:w-1/4 ml-1 h-full justify-start items-center">
            <h1 className="font-txt mx-5 text-white text-md h-12 w-4/6 items-center justify-start flex">Accès direct</h1>
            <ul className="list-none w-4/6 m-auto">
                <Menu/>
                <Menu/>
                <Menu/>
                <Menu/>
                <Menu/>
                <Menu/>
                <Menu/>
            </ul>
        </span>
    )
}

export default Navlistfooter;