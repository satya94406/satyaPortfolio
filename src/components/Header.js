import { Link } from "react-router-dom";
import logo from "../Assests/images/logo.jpeg";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header=()=>{   
    const [ismenuOpen , setIsmenuOpen] = useState(false) ;

    const togglemenu=()=>{
           setIsmenuOpen(!ismenuOpen) ;
    }

    return(
        <>
            <div className="bg-slate-400 fixed w-full flex justify-between items-center z-10 max-h-16">
               <img className="w-20 p-2 rounded-full " src={logo} alt="logo" ></img>

               <button className="md:hidden p-3" onClick={togglemenu}>
                   <FontAwesomeIcon icon={faBars} />
               </button>

               
                <ul className="hidden md:flex ">
                    <li className="mx-5 my-3 hover:text-white "><Link className="hover:underline font-bold" to="/">Home</Link></li>
                    <li className="mx-5 my-3  hover:text-white "><Link className="hover:underline font-bold" to="/About">About</Link></li>
                    <li className="mx-5 my-3  hover:text-white "><Link className="hover:underline font-bold" to="Contact">Contact</Link></li>
                </ul>
               
                { ismenuOpen &&
                <ul className="absolute top-16  w-full bg-slate-400 flex flex-col border-t-[0.1px] border-neutral-600 md:hidden">
                    <li className="mx-5 my-3 hover:text-white " onClick={togglemenu}><Link className="hover:underline font-bold block " to="/">Home</Link></li>
                    <li className="mx-5 my-3  hover:text-white " onClick={togglemenu}><Link className="hover:underline font-bold block " to="/About">About</Link></li>
                    <li className="mx-5 my-3  hover:text-white " onClick={togglemenu}><Link className="hover:underline font-bold block  " to="Contact">Contact</Link></li>
                </ul>
                }
            </div>
        </>
    )
}

export default Header ;