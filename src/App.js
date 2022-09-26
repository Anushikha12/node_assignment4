import React,{useState} from 'react'
import axios from 'axios'

function App() {
  const [name,setName]=useState("");
  const [phone,setPhone]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const data={
    "name":name,
    "phone":phone,
    "email":email,
    "password":password
  }

  const handleForm=(e)=>{
    e.preventDefault(); 
    console.log(name,phone,email,password);
    axios.post('http://localhost:4000/user',data).then((response)=>{
      console.log(response);
    })
  }
  return (
    <div className="container w-50">
     <form onSubmit={handleForm}>
  <div className="mb-3">
  <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
  <input type="text" className="form-control" id="name1" onChange={(e)=>{setName(e.target.value)}}/>
  <label  htmlFor="exampleInputEmail1" className="form-label">Phone-number</label>
  <input type="number" className="form-control" id="phone1" onChange={(e)=>{setPhone(e.target.value)}}/>
    <label  htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>{setEmail(e.target.value)}}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e)=>{setPassword(e.target.value)}}/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label"  htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  );
}

export default App;
