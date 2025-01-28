import swiggy from "../Assests/images/swiggy.jpeg";
import wheather from "../Assests/images/wheather1.jpeg";
import youtube1 from "../Assests/images/youtube1.jpeg";

const Project = () => {
  return (
    <div className="text-white bg-gradient-to-br bg-slate-700 min-h-screen p-5 pt-0">
      <h1
        className="relative text-center font-extrabold text-5xl   mb-10 "
        style={{
          textShadow: "0 0 15px #ff00ff, 0 0 30px #ff00ff, 0 0 50px #ff00ff",
        }}
      >
        <span className="absolute  rounded-lg border-4 border-pink-500 blur-lg"></span>
        Amazing PROJECTS
      </h1>

      {/* Projects Section */}
      <div className="space-y-10">
        {/* YouTube Clone */}
        <ProjectCard
          title="YouTube Clone"
          description="Built a YouTube clone using React.js, featuring simulated YouTube content powered by fake API data for a seamless and interactive user experience."
          sourceCode="https://github.com/satya94406/youtube"
          liveDemo="https://satya94406.github.io/youtube/"
          imgSrc={youtube1}
        />

        {/* Weather App */}
        <ProjectCard
          title="Weather App"
          description="Developed a Weather app clone using React.js, providing real-time or mock weather updates with a clean and user-friendly interface."
          sourceCode="https://github.com/satya94406/weather"
          liveDemo="https://satya94406.github.io/weather/"
          imgSrc={wheather}
        />

        {/* Swiggy Clone */}
        <ProjectCard
          title="Swiggy Clone"
          description="Developed a dynamic Swiggy-inspired web application utilizing React.js, Tailwind CSS, and Firebase"
          sourceCode="https://github.com/satya94406/swiggy"
          liveDemo="https://satya94406.github.io/swiggy/"
          imgSrc={swiggy}
        />
      </div>
    </div>
  );
};

// ProjectCard Component
const ProjectCard = ({ title, description, sourceCode, liveDemo, imgSrc }) => {
  return (
   <div className="flex flex-col md:flex-row items-center gap-5 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 p-5 rounded-lg border-2 border-gray-600 shadow-lg hover:shadow-2xl transition-shadow duration-500 relative group">
      {/* Image */}
      <div className="relative overflow-hidden rounded-lg w-full md:w-1/2 h-48 md:h-56">
        <div className="absolute inset-0 z-10 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
        </div>
        <a href={liveDemo} target="_blank" rel="noopener noreferrer">
          <img
            src={imgSrc}
            alt={title}
            className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110 group-hover:opacity-75"
          />
        </a>
      </div>

      {/* Content */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <h2 className="text-2xl font-extrabold text-white">{title}</h2>
        <p className="text-gray-300 text-sm mt-2">{description}</p>
        <div className="flex gap-4 mt-4">
          <a
            href={sourceCode}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-red-500 text-white rounded-lg text-sm font-semibold hover:bg-red-600 transition-colors"
          >
            Source Code
          </a>
          <a
            href={liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-amber-400 text-gray-900 rounded-lg text-sm font-semibold hover:bg-amber-500 transition-colors"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
