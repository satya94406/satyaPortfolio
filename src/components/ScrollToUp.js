import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Monitor scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        // Show button if scrolled down 200px
        setIsVisible(true);
      } else {
        // Hide button if scrolled up
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling effect
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
            {/* Corrected Font Awesome Arrow */}
            <FontAwesomeIcon icon={faAngleUp} className="text-2xl" />
          </button>
        </div>
      )}
    </>
  );
};

export default ScrollToTop;
