import { useState } from "react";

const Contact_Form=()=>{
 const [form_data , setForm_data] = useState({
    Name:"" ,
    email:"" ,
    message:"" ,
 }) ;

  const handleChange=(e)=>{
      setForm_data({
         ...form_data ,
         [e.target.name] : e.target.value 
      })
  }

  const handleSubmit_Form=(e)=>{
      e.preventDefault();
      console.log(form_data);
      alert("form Submitted") ;
  }

  return(
  <form  className="w-48 max-w-md pr-2 " onSubmit={handleSubmit_Form}>
    <div>

      <div className="mt-2 mb-5 ">
        <label className="font-medium ">Name </label><br/>
        <input className=" w-full md:w-96 rounded-lg p-1" type="text" onChange={handleChange} name="Name" placeholder="Full Name" required value={form_data.Name}/><br/>
      </div>

      <div className="mt-5 mb-5">
        <label className="font-medium ">Email </label><br/> 
        <input className=" w-full md:w-96 rounded-lg p-1" type="text" placeholder="Email" onChange={handleChange} name="email" required value={form_data.email}/><br/>
      </div>  

      <div className="mt-5 mb-5">
        <label className="font-medium ">Message</label><br/>
        <textarea className=" w-full md:w-96 rounded-lg p-1" type="text" placeholder="Message" onChange={handleChange} name="message" required value={form_data.message}/><br/>
      </div>  
      
      <div className="bg-black  text-gray-50 w-full md:w-96 rounded-lg p-1 flex justify-center font-medium mb-1">
         <button type="submit" className="w-full"> Submit </button>
      </div>
      
    </div>
   </form>
  )
}

export default Contact_Form ;