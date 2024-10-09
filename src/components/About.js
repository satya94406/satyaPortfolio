import Footer from "./Footer";

const About = () => {
  return (
    <>
      <div className="bg-slate-300   pt-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
            About Me
          </h1>
          <ul className=" text-lg text-zinc-600 md:text-xl md:px-10 pb-2 ml-2 ">
            <li className="pb-2 ml-2 animate-fadeIn delay-[1000ms]">🚀  I am currently pursuing my B.Tech in Information Technology (2nd Year).</li>
            <li className="pb-2 ml-2 animate-fadeIn delay-[2000ms]">🚀  My college is Maharaja Surajmal Institute of Technology.</li>
            <li className="pb-2 ml-2 animate-fadeIn delay-[3000ms]">🚀  I have completed my Diploma in Electrical Engineering from GNDIT college.</li>
            <li className="pb-2 ml-2 animate-fadeIn delay-[4000ms]">🚀  I have 3 years of experience at a 66/33/11 KV substation in Tata Power DDL.</li>
            <li className="pb-2 ml-2 animate-fadeIn delay-[5000ms]">🚀  Currently, I am a web developer focused on frontend technologies.</li>
            <li className="pb-2 ml-2 animate-fadeIn delay-[6000ms]">🚀  I have joined the Microsoft Chapter Student (MSC) society.</li>
            <li className="pb-2 ml-2 animate-fadeIn delay-[7000ms]">🚀  I am passionate about learning new technologies and skills.</li>
            <li className="pb-2 ml-2 animate-fadeIn delay-[8000ms]">🚀  I am keen to explore AI/ML-related skills.</li>
            <li className="pb-4 ml-2 animate-fadeIn delay-[9000ms]">🚀  I am also a member of the Geek Room in the Department of DSA.</li>
          </ul>

        <Footer />
      </div>
    </>
  );
};

export default About;
