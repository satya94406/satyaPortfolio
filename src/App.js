import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";

const App = () => {
  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 });
  const [outlinePosition, setOutlinePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;

      // Update the small dot cursor immediately
      setDotPosition({ x: clientX, y: clientY });

      // Smooth transition for the outline cursor
      setTimeout(() => {
        setOutlinePosition({ x: clientX, y: clientY });
      }, 50); // Add a small delay for a trailing effect
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div>
      <div
        className="cursor-dot fixed w-2 h-2 bg-white rounded-full pointer-events-none z-50"
        style={{
          transform: `translate(${dotPosition.x}px, ${dotPosition.y}px)`,
        }}
      ></div>
      <div
        className="cursor-outline fixed w-10 h-10 border-2 border-white rounded-full pointer-events-none z-40 transition-transform duration-150"
        style={{
          transform: `translate(${outlinePosition.x - 20}px, ${
            outlinePosition.y - 20
          }px)`,
        }}
      ></div>
        <Header />
        <Body />      
    </div>
  );
};

export default App;
