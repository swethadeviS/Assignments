import React, { useState } from "react";
import axios from "axios";

const EditUsers = () => {
    const[formData,setFormData]=useState({ id:"",name:"",age:""});
    const handleChange=(e)=>{
        const{name,value}=e.target;
        setFormData({
            id:name==='id'?value:formData.id,
            name:name==='name'?value:formData.name,
            age:name==='age'?value:formData.age,
        });
    }
    const handleSubmit= async(e)=>{
        e.preventDefault();
        try{
            const response=await axios.put(`http://localhost:8000/mvcUser/updateUser/${formData.id}`,
              {name:formData.name,age:formData.age});
            
            alert("User Updated Successfully");
            console.log("Data sent Successfully",response.data);
            setFormData({id:"",name:"",age:""});
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
            <label className="form-label">ID</label>
            <input type='text' name='id' value={formData.id} onChange={handleChange}/>
            <div className="mb-3">
            <label className="form-label">Name</label>
           <input type='text' name='name' value={formData.name} onChange={handleChange}/>
            <div className="mb-3">
            <label className="form-label">Age</label>
            <input type='text' name='age' value={formData.age} onChange={handleChange}/>
         </div>
         </div>
         </div>
        </form>
       </div>
      <button type='submit'onSubmit={handleSubmit}>Submit</button>
    </div>
  )
}

export default EditUsers;

