import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin, faTwitch } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import Footer from "./Footer";
import Contact_Form from "./Contact_Form";

const Contact=()=>{
    return(
        <>
          <div className="bg-slate-300  pt-16 ">
          <div className="flex justify-evenly ">
          <div>
           <h1 className="text-xl text-amber-600 pt-2 font-extrabold pl-3">Contact Me </h1><br/>
           <ul className="pb-4 pl-3">
              <li><strong>Name:</strong>Satya Prakash Tripathi</li>
              <li><strong>Email :</strong><a>satya9604166@gmail.com</a></li>
              <li><strong>Mobile No. :</strong>9315358737</li><br/>
              <h1 className="text-xl  font-extrabold text-amber-600">Socials</h1><br/>
              <li><strong>Linkedln : </strong><a className="text-blue-500"   target="_blank"  href="https://www.linkedin.com/in/satya-prakash-tripathi-44a07b2b2"><FontAwesomeIcon size="xl" icon={faLinkedin}/> </a></li>
              <li><strong>Instagram : </strong><a className="text-blue-500"   target="_blank"  href="https://www.instagram.com/invites/contact/?igsh=cp9ho96pvfke&utm_content=bnorbgh"><FontAwesomeIcon size="xl" icon={faInstagram}/> </a></li>
              <li><strong>Twitter : </strong><a className="text-blue-500"   target="_blank"  href="https://x.com/TripathiSa12443?t=gtVkG6oOMB8S1baj4Z7PZw&s=09"><FontAwesomeIcon size="xl" icon={faTwitter}/></a></li>
           </ul>
           </div>
           <Contact_Form/>
           </div>
           <Footer/>
          </div>
        </>
    )
}

export default Contact ;