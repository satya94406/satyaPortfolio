import { motion } from "framer-motion";

const education_details = [
    {
        degree: "High School",
        institution: "R.S.B.V Kalyan-Vas Delhi",
        duration: "2015-2016",
    },
    {
        degree: "Intermediate School",
        institution: "R.S.B.V Kalyan-Vas Delhi",
        duration: "2017-2018",
    },
    {
        degree: "Diploma in Electrical Engg.",
        institution: "Guru Nanak Dev Institute Of Technology",
        duration: "2018-2021",
    },
    {
        degree: "B-Tech in Information Technology",
        institution: "Maharaja Surajmal Institute Of Technology",
        duration: "2023-2027",
    },
];

const Education_Timeline = () => {
    const variants = {
        hidden: { opacity: 0 },
        visible: (i) => ({
            opacity: 1,
            transition: {
                delay: i * 0.2,
                duration: 0.5,
            },
        }),
    };

    return (
        <>
            <div
                className="text-center text-white font-extrabold text-5xl"
                style={{
                    textShadow: "0 0 15px #ff00ff, 0 0 30px #ff00ff, 0 0 50px #ff00ff",
                }}
            >
                <h1>EDUCATION</h1>
            </div>
            <div className="w-full flex my-2 justify-center items-center flex-col">
                {education_details.map((edu, index) => (
                    <motion.div
                        key={index}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={variants}
                        className={`w-full md:w-1/2 flex ${index % 2 === 0 ? 'md:mr-16 justify-start' : 'md:ml-16 justify-end'} `}
                    >
                        <div
                            key={index}
                            className="relative bg-black m-2  mb-5 w-52 md:w-72 p-4  rounded-md border-4 border-green-500 shadow-lg overflow-hidden"
                            style={{
                                boxShadow: "0 0 15px rgba(34, 197, 94, 0.7), 0 0 30px rgba(34, 197, 94, 0.5)", // Green glow effect
                            }}
                        >
                            {/* Glowing Border Animation */}
                            <div
                                className="absolute inset-0 rounded-md border-2 border-green-400 animate-pulse"
                                style={{
                                    boxShadow: "0 0 20px rgba(34, 197, 94, 0.8)",
                                    filter: "blur(3px)",
                                }}
                            ></div>

                            <h1 className="font-bold text-lg text-center text-white mb-2">{edu.degree}</h1>
                            <h1 className="font-semibold text-sm text-center text-white">{edu.duration}</h1>
                            <h1 className="text-sm text-center italic text-white">{edu.institution}</h1>
                        </div>
                    </motion.div>
                ))}
            </div>
        </>
    );
};

export default Education_Timeline;
