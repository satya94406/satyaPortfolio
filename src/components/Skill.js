const skillDetails = [
    {
      img: "https://www.vinodjangid.site/src/png/htmllogo.png",
      text: "HTML",
    },
    {
      img: "https://www.vinodjangid.site/src/png/csslogo.png",
      text: "CSS",
    },
    {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9FxiHJarAk6MJ0bNOEEM47rllqHOKiBpsuA&s",
        text:"Tailwind CSS"
    },
    {
      img: "https://www.vinodjangid.site/src/png/jslogo.png",
      text: "JS",
    },
    {
      img: "https://www.vinodjangid.site/src/png/reactlogo.png",
      text: "React Js",
    },
    {
        img:"https://static-00.iconduck.com/assets.00/redux-icon-2048x1945-ahvhunxp.png",
        text:"Redux"
    },
    {
        img:"https://static-00.iconduck.com/assets.00/react-router-icon-512x279-zswz065s.png",
        text:"React-Routing"
    },
    {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuawUuQCcq6fD-KpdmL4QixUOyqQqdrVNIDg&s",
        text:"Firebase"
    },
    {
      img: "https://www.vinodjangid.site/src/png/githublogo.png",
      text: "Github",
    },
    {
      img: "https://www.vinodjangid.site/src/png/clogo.png",
      text: "C",
    },
    {
      img: "https://www.vinodjangid.site/src/png/cpplogo.png",
      text: "C++",
    },
  ];
  
  const Skill = () => {
    return (
        <>
        <div className="text-center text-white font-extrabold  text-5xl md:text-7xl"
          style={{textShadow: "0 0 15px #ff00ff, 0 0 30px #ff00ff, 0 0 50px #ff00ff"}}
          >
        <h1>SKILLS</h1>
        </div>
        <div className="flex justify-center mt-10 pl-[20px] pr-[20px]">
        <div className="grid grid-cols-2 md:grid-cols-4  gap-14">
          {skillDetails.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-gray-800 text-white p-4 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 hover:border-4 hover:border-green-500 hover:shadow-2xl hover:shadow-green-400 ease-in-out"
              >
              <img
                src={skill.img}
                alt={skill.text}
                className="w-20 md:w-48 h-20 md:h-48  mb-4 rounded-full border-4 border-gray-600 hover:border-teal-400"
              />
              <span className="text-lg font-semibold">{skill.text}</span>
            </div>
          ))}
        </div>
      </div>
      </>
    );
  };
  
  export default Skill;
  