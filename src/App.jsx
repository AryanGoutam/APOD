import { useEffect, useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Main from './components/Main'
import Sidebar from './components/Sidebar'

function App() {
  const [data,setdata] = useState(null);
  const[loading,setloading] = useState(false);
  const [showmodal , setshowmodal] =useState (false);

  function handledisplaymodal(){
    setshowmodal(!showmodal);
  }

  useEffect(() => {
      async function fetchapi(){
        const Nasa_key = import.meta.env.NASA_API_KEY;

        const url = " https://api.nasa.gov/planetary/apod" + `?api_key=kUbB8H0tROKiYKDFYPTlOoSc59f4Bh6tegE5Dfe8
        `;

        const today = (new Date()).toDateString();
        const localkey = `NASA-${today}`;
        
        if(localStorage.getItem(localkey)){
          const apidata = JSON.parse(localStorage.getItem(localkey))
          setdata(apidata);
          console.log("Fetched from cache");
          return;
        }
        localStorage.clear()



        try{
            const response = await fetch(url);
            const apidata = await response.json();
            localStorage.setItem(localkey, JSON.stringify(apidata));
            setdata(apidata);
            console.log("Fetched from api today ")
        }catch(err){
            console.log(err.message);
        }

      }

      fetchapi();

  },[])

  return (
    <div>
      {data ? (<Main data = {data}/>):
      <div className='loadingstate'> <i className="fa-solid fa-gear"></i></div>}
      {showmodal && (<Sidebar  data = {data} handledisplaymodal = {handledisplaymodal}/>)}

      {data && (<Footer data = {data} handledisplaymodal = {handledisplaymodal} />)}
    </div>
     
  )
}

export default App
