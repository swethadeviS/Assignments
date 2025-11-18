import{useEffect,useState}from "react";
import axios from "axios";
const Getusers=()=>{
const [users,setUsers]=useState([]);
useEffect(()=>{
    axios
    .get("https://localhost:8000/mvcUser/getusers")
    .then((response)=>{
        console.log(response.data.myUsers);
        setUsers(response.data.myUsers);
    })
    .catch((error)=>{
      console.log("errors fetching data ",error);
    });
},[]);
return(
    <>
    <div className="container mt-5">
<h2 className="text-center mb-4">Users</h2>
<div className="table-responsive" style={{maxHeight:"500px"}}>
    <table className="table table-borderd text-center">
        <thead className="table-dark stickey-top">
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
            </tr>
        </thead>
        <tbody>
            {users.map((user,id)=>{
                <tr key={id}>
                    <th>{user._id}</th>
                    <th>{user.name}</th>
                    <th>{user.age}</th>
                </tr>
            })}
        </tbody>
    </table>
</div>
    </div>
    </>
);
};
export default Getusers;