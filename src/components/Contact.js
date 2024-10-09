import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin, faTwitch } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import Footer from "./Footer";
const Contact=()=>{
    return(
        <>
          <div className="bg-slate-300  pt-16  ">
           <h1 className="text-xl pt-4 font-extrabold pl-3">Contact Me </h1><br/>
           <ul className="pb-4 pl-3">
              <li><strong>Name:</strong>Satya Prakash Tripathi</li>
              <li><strong>Email :</strong><a>satya9604166@gmail.com</a></li>
              <li><strong>Mobile No. :</strong>9315358737</li><br/>
              <li><strong>Linkedln <FontAwesomeIcon size="xl" icon={faLinkedin}/> : </strong><a className="text-blue-500"   target="_blank"  href="https://www.linkedin.com/in/satya-prakash-tripathi-44a07b2b2">https://www.linkedin.com/in/satya-prakash-tripathi-44a07b2b2</a></li>
              <li><strong>Instagram <FontAwesomeIcon size="xl" icon={faInstagram}/> : </strong><a className="text-blue-500"   target="_blank"  href="https://www.instagram.com/invites/contact/?igsh=cp9ho96pvfke&utm_content=bnorbgh">satyaprakash.tripathi.7165</a></li>
              <li><strong>Twitter <FontAwesomeIcon size="xl" icon={faTwitter}/> : </strong><a className="text-blue-500"   target="_blank"  href="https://x.com/TripathiSa12443?t=gtVkG6oOMB8S1baj4Z7PZw&s=09">https://x.com/TripathiSa12443?t=gtVkG6oOMB8S1baj4Z7PZw&s=09</a></li>
           </ul>
           <Footer/>
          </div>
        </>
    )
}

export default Contact ;