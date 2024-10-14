import { useEffect, useState } from "react"
import swiggy from "../Assests/images/swiggy.jpeg"
import wheather from "../Assests/images/wheather1.jpeg"
import youtube1 from "../Assests/images/youtube1.jpeg"
const Project=()=>{
     const [ping , setPing] = useState(true);
     useEffect(()=>{
       setTimeout(() => {
          setPing(false)
       }, 5000);
     },[])
    return(
       <div >
          <h1 className={`text-center text-rose-700 font-semibold text-3xl p-2 ${ping ? 'animate-ping' : '' }`}> PROJECT</h1>
          
          <div className="flex justify-center p-2 items-center">
            <div className="flex flex-col">
             <h1 className="text-sm">"I've created a <span className="text-amber-400 font-extrabold text-2xl animate-pulse " >Youtube</span> clone using React js, with fake API data to simulate YouTube content.</h1>
             <a href="https://github.com/satya94406/youtube" target="_blank"><button className="hover:bg-red-500 w-24 h-5 rounded-lg text-sm bg-red-400 text-sky-800 font-semibold ">source code</button></a>
             <span className="text-sky-800 text-xs font-serif">"Click the image for a website link."</span>
             </div>
             <a href="https://satya94406.github.io/youtube/" target="_blank" ><img className="w-76 md:w-80 h-32 md:h-44 pl-1" src={youtube1} /></a>
          </div><br/>

          <div className="flex justify-center p-2 items-center ">
          <div className="flex flex-col">
             <h1 className="text-sm">"I've created a <span className="text-amber-400 font-extrabold text-2xl  animate-pulse " >Wheather</span> clone using  React js, with real-time or mock data for weather updates."</h1>
             <a href="https://github.com/satya94406/weather" target="_blank"><button className="hover:bg-red-500 w-24 h-5 rounded-lg text-sm bg-red-400 text-sky-800 font-semibold ">source code</button></a>
             <span className="text-sky-800 text-xs font-serif">"Click the image for a website link."</span>
            </div>
          <a href="https://satya94406.github.io/weather/" target="_blank"><img className=" pl-1 h-44 md:h-48  w-72 md:w-80" src={wheather} /></a>   
          </div><br/>
          
          <div className="flex justify-center px-2 items-center ">
          <div className="flex flex-col">
             <h1 className="text-sm">"I've created a partial<span className="text-amber-400 font-extrabold text-2xl  animate-pulse ">Swiggy</span> clone using Firebase, Tailwind CSS, and React.js, with fake API data"</h1>
             <a href="https://github.com/satya94406/swiggy" target="_blank"><button className="hover:bg-red-500 w-24 h-5 rounded-lg text-sm bg-red-400 text-sky-800 font-semibold ">source code</button></a>
             <span className="text-sky-800 text-xs font-serif">"Click the image for a website link."</span>
          </div>  
             <a href="https://satya94406.github.io/swiggy/" target="_blank"><img className=" pl-1 w-76 md:w-80 h-32 md:h-44 " src={swiggy} /></a>
          </div><br/>
       </div>
    )
}

export default Project ;