import { Link } from "react-router-dom";

const Header=()=>{   
    return(
        <>
            <div >
                    <ul className="bg-red-400 flex justify-end ">
                    <li className="mx-5 my-3 hover:text-white "><Link to="/">Home</Link></li>
                    <li className="mx-5 my-3  hover:text-white "><Link to="/About">About</Link></li>
                    <li className="mx-5 my-3  hover:text-white "><Link to="Services">Services</Link></li>
                    <li className="mx-5 my-3  hover:text-white "><Link to="Contact">Contact</Link></li>
                </ul>
                
            </div>
        </>
    )
}

export default Header ;