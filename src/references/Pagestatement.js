import React,{ Fragment } from "react";
import images from "./../images/logo_with_name.png";

const Pagestatement = () =>{
    return(
        <Fragment>
            <span className="inline-block m-auto p-5 w-full bg-white items-center justify-center lg:flex">
                <span className="inline-block w-full h-full lg:w-1/6 items-center justify-center flex">
                    <img className="w-24 h-full mt-3 mb-3 lg:w-24 lg:h-full" src={images} alt="" />
                </span>
                <span className="inline-block w-full h-full p-2 border-red-500 lg:w-5/6 lg:h-full items-center justify-start flex-col">
                    <h1 className="inline-block p-2 text-xl font-txt text-gray-500">paiecash<br/></h1>
                    <hr/>
                    <p className="inline-block p-2 text-lg font-txt text-gray-900">paiecash<br/> </p>
                </span>
            </span>
            {/* <span className="inline-block h-8 w-full">
                <ul className="bg-black text-white w-full h-full md:flex">
                    <li className="w-1/6 border h-full text-center">option</li>
                    <li className="w-1/6 border h-full text-center">option</li>
                    <li className="w-1/6 border h-full text-center">option</li>
                    <li className="w-1/6 border h-full text-center">option</li>
                    <li className="w-1/6 border h-full text-center">option</li>
                    <li className="w-1/6 border h-full text-center">option</li>
                </ul>
            </span> */}
        </Fragment>
    )
}

export default Pagestatement;