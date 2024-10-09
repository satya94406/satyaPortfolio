import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
     <div className="bg-slate-500 text-gray-50  mt-0">
        <div>
            <h1 className="flex justify-center py-2">Satya Prakash Tripathi</h1>
            <p className="text-xs max-w-sm mx-auto">A Frontend-focused Web Developer building the frontend of Websites and Web Applications that lead to the success of the overall product.</p>
        </div>
        <div className="flex justify-center py-2 ">
            <a href="https://x.com/TripathiSa12443?t=gtVkG6oOMB8S1baj4Z7PZw&s=09"   target="_blank"  className="mx-2"><FontAwesomeIcon size="lg" icon={faTwitter}/></a>
            <a href="https://www.instagram.com/invites/contact/?igsh=cp9ho96pvfke&utm_content=bnorbgh"   target="_blank"  className="mx-2"><FontAwesomeIcon size="lg" icon={faInstagram}/></a>
            <a href="https://www.linkedin.com/in/satya-prakash-tripathi-44a07b2b2"   target="_blank"  className="mx-2"><FontAwesomeIcon size="lg" icon={faLinkedin}/></a>
        </div>
        <div className="border-t-2 max-w-screen-md mx-auto ">
            <p className="text-center text-xs py-3">&copy; 2024 Satya Prakash Tripathi. All Rights Reserved.</p>
        </div>
     </div>
  );
};

export default Footer;
