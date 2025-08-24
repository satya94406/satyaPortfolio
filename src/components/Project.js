import swiggy from "../Assests/images/swiggy.jpeg";
import wheather from "../Assests/images/wheather1.jpeg";
import youtube1 from "../Assests/images/youtube1.jpeg";
import currency_converter from "../Assests/images/curr.converter.png";
import TicTacToe from "../Assests/images/TicTacToe.png";
import Stone_paper_scissor from "../Assests/images/Stone_pap_sci.png";
import Portfolio from "../Assests/images/Portfolio.png";
import Todo from "../Assests/images/Todo.png";
import Calculator from "../Assests/images/Calculator.png"
const Project = () => {
  return (
    <div className="text-white bg-gradient-to-br bg-slate-700 min-h-screen p-5 pt-0">
      <h1
        className="relative text-center font-extrabold text-5xl md:text-7xl  mb-10 "
        style={{
          textShadow: "0 0 15px #ff00ff, 0 0 30px #ff00ff, 0 0 50px #ff00ff",
        }}
      >
        <span className="absolute  rounded-lg border-4 border-pink-500 blur-lg"></span>
        Amazing PROJECTS
      </h1>

      

      <div className="space-y-10">
       
        <ProjectCard
          title="Currency Converter"
          description="A sleek and efficient Currency Converter built with HTML, CSS, and JavaScript, using a real-time API for accurate exchange rates."
          sourceCode="https://github.com/satya94406/Currency-Converter.git"
          liveDemo="https://satya94406.github.io/Currency-Converter/"
          imgSrc={currency_converter}
        />

        <ProjectCard
          title="Todo App"
          description="A simple and efficient Todo App built using React.js, Redux for state management, and styled with Tailwind CSS. "
          sourceCode="https://github.com/satya94406/my-todo-list-app.git"
          liveDemo="https://my-todo-list-app-tau.vercel.app/"
          imgSrc={Todo}
        />

        <ProjectCard
          title="Calculator"
          description="Developed a fully functional calculator using React.js and Vite, supporting basic arithmetic operations with a clean and intuitive UI."
          sourceCode="https://github.com/satya94406/Calculator"
          liveDemo="https://satya94406.github.io/Calculator/"
          imgSrc={Calculator}  
        />

        <ProjectCard
          title="Weather App"
          description="Developed a Weather app clone using React.js, providing real-time or mock weather updates with a clean and user-friendly interface."
          sourceCode="https://github.com/satya94406/weather"
          liveDemo="https://satya94406.github.io/weather/"
          imgSrc={wheather}
        />

        <ProjectCard
          title="Tic Tac Toe"
          description="A fun and interactive Tic-Tac-Toe game built with HTML, CSS, and JavaScript for a seamless gaming experience."
          sourceCode="https://github.com/satya94406/tic-tac-toe.git"
          liveDemo="https://satya94406.github.io/tic-tac-toe/"
          imgSrc={TicTacToe}
        />

        <ProjectCard
          title="Rock paper Scissor ✊✋✂️"
          description="A classic Rock Paper Scissors game built with HTML, CSS, and JavaScript for an exciting and interactive experience."
          sourceCode="https://github.com/satya94406/Rock-Paper-Scissors.git"
          liveDemo="https://satya94406.github.io/Rock-Paper-Scissors/"
          imgSrc={Stone_paper_scissor}
        />

        <ProjectCard
          title="Personal Portfolio"
          description="A sleek and interactive Personal Portfolio built with React.js and Tailwind CSS, designed to showcase my skills and projects in a modern and engaging way."
          sourceCode="https://github.com/satya94406/satyaPortfolio.git"
          liveDemo="https://satya94406.github.io/satyaPortfolio/"
          imgSrc={Portfolio}
        />

        <ProjectCard
          title="YouTube Clone"
          description="Built a YouTube clone using React.js, featuring simulated YouTube content powered by fake API data for a seamless and interactive user experience."
          sourceCode="https://github.com/satya94406/youtube"
          liveDemo="https://satya94406.github.io/youtube/"
          imgSrc={youtube1}
        />

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

const ProjectCard = ({ title, description, sourceCode, liveDemo, imgSrc }) => {
  return (
   <div className="flex flex-col md:flex-row items-center gap-5 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 p-5 rounded-lg border-2 border-gray-600 shadow-lg hover:shadow-2xl transition-shadow duration-500 relative group">
      <div className="relative overflow-hidden rounded-lg w-full md:w-1/3 h-48 md:h-72">
        <div className="absolute inset-0 z-10 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
        </div>
        <a href={liveDemo} target="_blank" rel="noopener noreferrer">
          <img
            src={imgSrc}
            alt={title}
            className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110 group-hover:opacity-85"
          />
        </a>
      </div>

      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <h2 className="text-4xl font-extrabold text-white">{title}</h2>
        <p className="text-gray-300 text-lg mt-2">{description}</p>
        <div className="flex gap-4 mt-4">
          <a
            href={sourceCode}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-red-500 text-white rounded-lg text-lg font-semibold hover:bg-red-600 transition-colors"
          >
            Source Code
          </a>
          <a
            href={liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-amber-400 text-gray-900 rounded-lg text-lg font-semibold hover:bg-amber-500 transition-colors"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
