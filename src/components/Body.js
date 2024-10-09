import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import photo from "../Assests/images/photo.jpeg";
import Footer from "./Footer";

const Body = () => {
  const [bounce, setBounce] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setBounce(false);
    }, 3000);
    }, []);

  return (
    <>
      <div className="bg-slate-300 pt-16 h-screen">
        <div className="flex flex-col md:flex-row  items-center justify-center bg-slate-700  px-4 pb-5 ">
          <div className={`text-center md:text-left md:ml-8 ${bounce ? 'animate-bounce ' : ''}`}>
            <h1 className="font-bold text-2xl text-zinc-300 mb-2">Hello,</h1>
            <h1 className="font-bold text-4xl text-zinc-50 mb-2"> I'm <span className="text-yellow-500 animate-pulse">Satya Prakash</span></h1>
            <h1 className="font-bold text-3xl text-zinc-50 mb-4">Web Developer</h1>
            <p className="text-sm font-serif text-gray-400 max-w-lg">   I am a React.js Developer and passionate about making user-friendly websites.
              <span className="text-sm font-serif text-gray-400 italic mt-2 block">  “Great web design without functionality is like a sports car with no engine.” </span>
            </p>
          </div>
          <img className="w-1/4 pt-4 rounded-full mt-6 md:mt-0 md:ml-10 hidden md:block" src={photo} alt="Satya Prakash" />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Body;
