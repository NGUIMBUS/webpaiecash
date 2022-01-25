import React,{ Component, Fragment} from "react";
import images from './../images/route.jpg';

class Visitcard extends Component{
    render(){
        return(
            <Fragment>
                <div className="w-full px-8 items-center lg:px-16 lg:w-1/2">
                    <h1 className="text-black whitespace-pre-wrap w-full font-bold text-2xl uppercase">site web paiecash</h1>
                    <p className="text-black w-full my-1 whitespace-pre-wrap text-md uppercase">Une solution rapide d'envoi et de retrait d'argent</p>
                    <button class="inline-block px-5 py-3 my-2  rounded-lg text-sm text-white uppercase tracking-widest font-semibold shadow-lg bg-red-500 hover:bg-indigo-400 active:bg-indigo-600 focus:outline-none">Activer la carte</button>
                </div>
                <div className="w-full px-8 items-center lg:px-16 lg:w-1/2">
                    <img className="wdth h-44 rounded-lg" src={images} alt=""/>
                </div>
            </Fragment>
        )
    }
}

export default Visitcard;