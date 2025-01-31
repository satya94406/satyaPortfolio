import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import Contact_Form from "./Contact_Form";

const Contact = () => {
  return (
    <>
      <div className="bg-slate-700 min-h-screen">
        <div className="max-w-6xl mx-auto px-6 py-5 pt-0 mt-5">
          <div
            className="text-center text-white font-extrabold text-5xl md:text-7xl mb-5"
            style={{
              textShadow: "0 0 15px #ff00ff, 0 0 30px #ff00ff, 0 0 50px #ff00ff",
            }}
          >
            <h1>Get in Touch</h1>
          </div>
          <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
            <div className="lg:w-1/3 bg-white rounded-lg shadow-md p-6 hover:border-4 hover:border-green-500 hover:shadow-2xl hover:shadow-green-400 transition-all ease-in-out duration-300">
              <h2 className="text-2xl font-bold text-amber-600 mb-4">Contact Details</h2>
              <ul className="space-y-4 text-lg">
                <li>
                  <strong>Name:</strong> Satya Prakash Tripathi
                </li>
                <li>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:satya9604166@gmail.com"
                    className="text-blue-600 hover:underline"
                  >
                    satya9604166@gmail.com
                  </a>
                </li>
                <li>
                  <strong>Mobile No.:</strong> 9315358737
                </li>
              </ul>

              <h2 className="text-xl font-bold text-amber-600 mt-8 mb-4">Social Media</h2>
              <ul className="flex space-x-6 text-xl">
                <li>
                  <a
                    href="https://www.linkedin.com/in/satya-prakash-tripathi-44a07b2b2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:text-blue-900 transition"
                  >
                    <FontAwesomeIcon size="2x" icon={faLinkedin} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/invites/contact/?igsh=cp9ho96pvfke&utm_content=bnorbgh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-600 hover:text-pink-800 transition"
                  >
                    <FontAwesomeIcon size="2x" icon={faInstagram} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/TripathiSa12443?t=gtVkG6oOMB8S1baj4Z7PZw&s=09"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-600 transition"
                  >
                    <FontAwesomeIcon size="2x" icon={faTwitter} />
                  </a>
                </li>
              </ul>
            </div>

            <div className="lg:w-2/3 bg-white rounded-lg shadow-md p-6 hover:border-4 hover:border-green-700 hover:shadow-2xl hover:shadow-green-400 transition-all ease-in-out duration-300">
              <Contact_Form />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
