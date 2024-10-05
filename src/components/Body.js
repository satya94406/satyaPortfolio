import my_photo from "../Assests/images/my_photo.jpeg"

const Body=()=>{
    return (
        <>
         <div className="flex items-center justify-between  bg-slate-700 ">
            <div className="flex-wrap">
              <h1 className="font-bold ml-6 text-1xl text-zinc-300 ">
                Hello,
              </h1>
              <h1 className="font-bold ml-6 text-3xl text-zinc-50"> I'm <span className="text-yellow-500">Satya Prakash</span></h1>
              <h1 className="font-bold ml-6 text-3xl text-zinc-50">Web Developer</h1>
              <p className="text-sm font-serif ml-6 text-gray-400">
                I am a React Js Developer and passionate to make user friendly website.<span className="text-sm font-serif ml-6 text-gray-400">“Great web design without functionality is like a sports car with no engine.”</span>  
              </p>
            </div>
            <img className=" w-1/4 rounded-full mx-10 my-2" src={my_photo} alt="satya photo" /> 
         </div>
        </>
    )
}

export default Body ;