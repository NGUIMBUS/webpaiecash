import React,{Fragment} from 'react';
import Header from './headerImage/Header';
import Choice from './headerChoice/Choice';
import Visitcard from './componentscard/Visitcard';
import Favoriteservice from './services/Favoriteservices';
import Activitiewall from './activities/Activitywall';
import Navlistfooter from './footer/Navlistfooter';
import Footcontentlogo from './footer/Footcontentlogo';
import Imagefooter from './footer/Imagefooter';
import Pagestatement from './references/Pagestatement';
import Backgroundvisibility from './headerChoice/Backgroundvisibility';
import './App.css';

function App(){
  return(
    <Fragment>
        <header className="m-0 hgt relative flex">
          <Header></Header>
          <Backgroundvisibility></Backgroundvisibility>
          <Choice></Choice>
        </header>
        <main className='w-full bg-white flex-1'>
          <div className="anim w-full bckGrd2 p-8 md:flex md:flex-row-reverse">
            <Visitcard/>
          </div>
          <div className="anim w-full p-8 md:flex md:flex-row-reverse">
            <Visitcard/>
          </div>
          <div className="w-full p-2 items-center text-center items-center flex-1">
            <h1 className="inline-block text-black font-bold text-4xl w-1/4">Services</h1>
            <div className='mt-1 mb-3 w-full items-center justify-center md:flex'>
              <Favoriteservice/>
              <Favoriteservice/>
              <Favoriteservice/>
              <Favoriteservice/>
            </div>
          </div>
          <div className="w-full p-2 items-center">
            <h1 className="inline-block text-black text-center font-bold text-4xl w-full">Activities</h1>
            <div className='mt-1 mb-3 w-full items-center justify-center md:flex'>
              <Activitiewall/>
              <Activitiewall/>
              <Activitiewall/>
              <Activitiewall/>
            </div>
            <div className='justify-center items-center flex'>
              <button class="inline-block px-10 py-3 my-2 text-sm text-white uppercase tracking-widest font-semibold bg-red-500 hover:bg-indigo-400 active:bg-indigo-600 focus:outline-none">Valide</button>
            </div>
          </div>
          <div className="border-b-8 bckGrd2 border-white anim w-full p-8  md:flex md:flex-row-reverse">
            <Visitcard/>
          </div>
        </main>
        <footer className='w-full h-72 m-auto'>
          <div className='bckGrd2 w-full lg:h-96 items-center justify-center lg:flex'>
            <Footcontentlogo/>
            <Navlistfooter/>
            <Navlistfooter/>
            <Imagefooter/>
          </div>
          <div className='w-full p-4 bg-black'>
            <Pagestatement/>
          </div>
        </footer>
    </Fragment>
  );
}

export default App;