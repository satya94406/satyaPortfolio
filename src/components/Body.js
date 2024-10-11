import { useEffect, useState } from "react";
import photo from "../Assests/images/photo.jpeg";
import Footer from "./Footer";
import Project from "./Project";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Body = () => {
  const [bounce, setBounce] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setBounce(false);
    }, 3000);
    }, []);

   
  return (
    <>
      <div className="bg-slate-300  md:pt-10 ">
        <div className="flex flex-col md:flex-row  items-center justify-center bg-slate-700  px-4 pt-16 md:pt-0 h-screen">
          <div className={`text-center flex-wrap md:text-left md:ml-8 ${bounce ? 'animate-bounce ' : ''}`}>
            <h1 className="font-bold text-4xl md:text-2xl text-zinc-300 mb-2">Hello,</h1>
            <h1 className="font-bold text-7xl md:text-4xl text-zinc-50 mb-2"> I'm <span className="text-yellow-500 animate-pulse">Satya Prakash</span></h1>
            <h1 className="font-bold text-6xl md:text-3xl text-zinc-50 mb-4">Web Developer</h1>
            <p className="text-xl md:text-sm font-serif text-gray-400 max-w-lg py-4">   I am a React.js Developer and passionate about making user-friendly websites.
              <span className="text-xl md:text-sm font-serif text-gray-400 italic mt-2 block pt-2">  “Great web design without functionality is like a sports car with no engine.” </span>
            </p>
          </div>
          <img className="w-1/4 pt-4 rounded-full mt-6 md:mt-0 md:ml-10 hidden md:block" src={photo} alt="Satya Prakash" />
        </div>
        <Project/>
        <Footer />
      </div>
    </>
  );
};

export default Body;
