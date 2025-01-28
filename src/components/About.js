import TypewriterComponent from "typewriter-effect";
import photo from "../Assests/images/photo.jpeg";

const About=()=>{
    return(
        <>
            <div className="flex flex-col md:flex-row items-center justify-center bg-slate-700 px-4 pt-56 md:pt-28 h-screen pb-60 md:pb-36 sm:pb-0">
        <div className="text-center md:text-left md:ml-8">
          <h1 className="font-bold text-4xl md:text-2xl text-zinc-300 mb-2">Hello,</h1>
          <h1 className="font-bold text-4xl text-zinc-50 mb-2">
            I'm <span className="text-yellow-500 animate-pulse text-4xl">Satya Prakash</span>
          </h1>
          <h1 className="font-bold text-3xl text-zinc-50 mb-4">
            <TypewriterComponent
              options={{
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("Web Developer")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Software Developer")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Frontend Developer")
                  .pauseFor(1000)
                  .deleteAll()
                  .start();
              }}
            />
          </h1>
          <p className="text-sm font-serif text-gray-400 max-w-lg py-4">
            I am a React.js Developer and passionate about making user-friendly websites.
            <span className="text-sm font-serif text-gray-400 italic mt-2 block pt-2">
              “Great web design without functionality is like a sports car with no engine.”
            </span>
          </p>
        </div>
        <img
          className="w-36 h-36 md:w-44 md:h-44 lg:w-56 lg:h-56 rounded-full border-4 border-gradient-to-br from-purple-500 to-pink-500 shadow-xl hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300 mt-6 md:mt-0 md:ml-10 sm:mt-4 sm:ml-0"
          src={photo}
          alt="Satya Prakash"
        />
      </div>

        </>
    )
}
export default About;