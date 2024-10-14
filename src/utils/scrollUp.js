import { faArrowUp } from "@fortawesome/free-solid-svg-icons/faArrowUp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const ScrollUp=()=>{
    const [isvisible , setIsvisible] = useState(false) ;

    const handle_arrowUp=()=>{
        window.scrollTo({top:0 ,left:0 , behavior:"smooth"})
    }
    
    const toggleIsVisibility=()=>{
        if(window.scrollY>150){
            setIsvisible(true) ;
        }
        else{
            setIsvisible(false)
        }
    }

    useEffect(()=>{
        console.log("called");
        window.addEventListener("scroll" , toggleIsVisibility ) ;
        return ()=> (window.addEventListener("scroll",toggleIsVisibility)) ;  
    })

    return(<>
     {  isvisible &&
        <div
            className="fixed bottom-3 right-4 text-2xl text-white bg-sky-800 p-2 pb-0 rounded-3xl cursor-pointer"
            onClick={handle_arrowUp}
          >
            <FontAwesomeIcon className="animate-bounce" icon={faArrowUp} />
          </div>
     }     
    </>)
}

export default ScrollUp ;