import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  };

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-5 right-5 z-50">
          <button
            onClick={scrollToTop}
            className="p-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-700 transition duration-300 flex items-center justify-center"
            aria-label="Scroll to Top"
          >
            <FontAwesomeIcon icon={faAngleUp} className="text-4xl md:text-5xl" />
          </button>
        </div>
      )}
    </>
  );
};

export default ScrollToTop;
