import React, { useState } from "react";
import axios from "axios";

const PostUsers = () => {
    const[formData,setFormData]=useState({name:'',age:''});
    const handleChange=()=>{
        const{name,value}=e.target;
        setFormData({
            name:name==='name'?value:formData.name,
            age:name==='age'?value:formData.age
        });
    }
    const handleSubmit= async(e)=>{
        e.preventDefault();
        try{
            const response=await axios.post("",formData);
            alert("User Register Successfully");
            console.log("Data sent Successfully");
            setFormData({name:"",age:""});
        }catch(error){
            console.log("Error posting data",error);
            alert("Something went wrong");
        }
    };
  return (
    <div className="container mt-5">
      <h2>Register</h2>
      <div>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
            <label className="form-label">Name</label>
           <input type='text' name='name' value={formData.name} onChange={handleChange}/>
            <div className="mb-3">
            <label className="form-label">Age</label>
            <input type='text' name='age' value={formData.age} onChange={handleChange}/>
         </div>
         </div>
        </form>
       </div>
      <button type='submit'>Submit</button>
    </div>
  )
}

export default PostUsers;

