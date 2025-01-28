import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-slate-700 to-slate-900 text-gray-50 mt-0">
      {/* Top Section */}
      <div className="text-center py-6">
        <h1 className="text-2xl font-bold text-amber-400">Satya Prakash Tripathi</h1>
        <p className="text-sm max-w-md mx-auto mt-2 text-gray-300">
          A Frontend-focused Web Developer building modern Websites and Web Applications that lead to the success of the overall product.
        </p>
      </div>

      {/* Social Links */}
      <div className="flex justify-center gap-6 py-4">
        <a
          href="https://x.com/TripathiSa12443?t=gtVkG6oOMB8S1baj4Z7PZw&s=09"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition duration-200"
        >
          <FontAwesomeIcon size="2x" icon={faTwitter} />
        </a>
        <a
          href="https://www.instagram.com/invites/contact/?igsh=cp9ho96pvfke&utm_content=bnorbgh"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500 transition duration-200"
        >
          <FontAwesomeIcon size="2x" icon={faInstagram} />
        </a>
        <a
          href="https://www.linkedin.com/in/satya-prakash-tripathi-44a07b2b2"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition duration-200"
        >
          <FontAwesomeIcon size="2x" icon={faLinkedin} />
        </a>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-600 max-w-screen-lg mx-auto"></div>

      {/* Bottom Section */}
      <div className="py-4">
        <p className="text-center text-xs text-gray-400">
          &copy; 2024 Satya Prakash Tripathi. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
