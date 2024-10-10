import swiggy from "../Assests/images/swiggy.jpeg"
import wheather from "../Assests/images/wheather1.jpeg"
import youtube1 from "../Assests/images/youtube1.jpeg"
const Project=()=>{
    return(
       <div>
          <h1 className="text-center text-rose-700 font-semibold text-3xl p-2"> PROJECT</h1>
          <div className="flex justify-center items-center p-2 ">
             <h1 className="text-xs  pl-16 ">"I've created a partial<span className="text-amber-400 font-extrabold text-2xl" >Swiggy</span> clone using Firebase, Tailwind CSS, and React.js, with fake API data for the Swiggy content." </h1>
             <img className="w-2/3 md:w-1/2 pl-2 h-20 md:h-3/4 pr-16" src={swiggy} />
          </div><br/>
          <div className="flex justify-center p-2 items-center h-64">
             <h1 className="text-sm  pl-16">"I've created a <span className="text-amber-400 font-extrabold text-2xl" >Wheather</span> clone using  React js, with real-time or mock data for weather updates."</h1>
             <img className="w-2/3 md:w-1/2 pr-16 h-[80%] rounded-2xl " src={wheather} />
          </div><br/>
          <div className="flex justify-center p-2 items-center ">
             <h1 className="text-sm  pl-16">"I've created a <span className="text-amber-400 font-extrabold text-2xl" >Youtube</span> clone using React js, with fake API data to simulate YouTube content.""</h1>
             <img className="w-2/3 md:w-1/2 pr-16 pl-2 h-20 md:h-3/4 " src={youtube1} />
          </div><br/>
       </div>
    )
}

export default Project ;