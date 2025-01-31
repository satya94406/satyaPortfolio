import TypewriterComponent from "typewriter-effect";
import photo from "../Assests/images/photo.jpeg";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-slate-700 px-4 pt-32 md:pt-24 h-screen pb-20 md:pb-10">
      <div className="text-center md:text-left md:ml-8">
        <h1 className="font-bold text-[6vw] md:text-[2vw] text-zinc-300">Hello,</h1>
        <h1 className="font-bold text-[6vw] md:text-[3vw] text-zinc-50">
          I'm <span className="text-yellow-500 animate-pulse">Satya Prakash</span>
        </h1>
        <h1 className="font-bold text-[6vw] md:text-[2.5vw] text-zinc-50 mb-2">
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
        <p className="text-[2.3vw] md:text-[1vw] font-serif text-gray-400 max-w-lg py-4">
          I am a React.js Developer and passionate about making user-friendly websites.
          <span className="text-[2.3vw] md:text-[1vw] font-serif text-gray-400 italic mt-2 block pt-2">
            “Great web design without functionality is like a sports car with no engine.”
          </span>
        </p>
      </div>

      <img
        className="w-[40vw] h-[40vw] md:w-[20vw] md:h-[20vw] rounded-full border-4 border-purple-500 shadow-xl hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300 md:ml-10"
        src={photo}
        alt="Satya Prakash"
      />
    </div>
  );
};

export default About;
