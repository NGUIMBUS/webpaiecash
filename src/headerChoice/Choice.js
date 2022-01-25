import React,{Component} from "react";
import NavChoice from "./Navigationchoice";
import Validate from "./Validation";
import images from "./../images/paie_cash.png";

class Choice extends Component{
    render(){
        return(
            <div className="absolute w-full h-full m-auto">
                <div className="relative w-full ease-in-out h-36 flex">
                    <span className="w-1/2 items-center flex">
                        <img className="delay-75 duration-200 ease-linear ease-in-out ml-5 sm:ml-10 md:ml-20 w-24 h-24 object-cover object-center" src={images} alt=""/>
                    </span>
                    <span className="w-1/2 m-auto">
                       <button className="border h-1/2 p-2 float-right mr-5 sm:mr-10 md:mr-20 text-white font-semibold tracking-widest active:text-black active:bg-white focus:outline-none">me connecter</button>
                    </span>
                </div>
                <div className="w-full h-80 mt-5">
                    <NavChoice/>    
                    <Validate/>
                </div>
            </div>
        )
    }
}

export default Choice;