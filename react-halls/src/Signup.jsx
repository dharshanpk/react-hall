import React from 'react'
import axios from 'axios'
import {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'

function Signup() {
  const [email, setEmail]= useState('');
  const[password,setPassword]=useState('');
  const[confirmPassword,setConfirmPassword]=useState('');
  const[phone,setPhone] = useState('');
  const[username,setUsername]=useState('');
  const[role, setRole] = useState('Customer');
  

  const handleSignup = async() => {
    if(password!==confirmPassword){
      alert("Password don't match");
      return;
  }

   
  try{
    console.log({username,email,role});
    const res=await fetch("https://react-hall-1.onrender.com",{
      method:'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({username,email,phone,role,password,confirmPassword})
    });
    const data=await res.json();
    
    if(res.ok){
    alert("SignUp successfull");

    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setPhone(''),
    setUsername(''),
    setRole('Customer');
  }else{
    alert(`Failed to add user: ${data.message}`);
    
  } }
  catch (error) {
    console.error("Error saving user:", error);
    alert("Error connecting to server");
  }
};



  return (
    
   <div
  style={{
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(to bottom right, #4facfe, #6a11cb)"
  }}
>
  <div
    style={{
      width: "400px",
      background: "white",
      padding: "30px",
      borderRadius: "12px",
      boxShadow: "0 4px 15px rgba(0,0,0,0.2)"
    }}
  >
      
      <div className="mb-3">
        <label htmlFor="username" className="form-label">Username</label>
        <input 
          type="text" 
          className="form-control" 
          id="username" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
        />
      </div>

    
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e) => setEmail(e.target.value)}/>
      <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
      </div>

      <div className="mb-3">
        <label htmlFor="phone" className="form-label">Phone</label>
        <input 
          type="text" 
          className="form-control" 
          id="phone" 
          value={phone} 
          onChange={(e) => setPhone(e.target.value)} 
        />
      </div>
      <div className="mb-3">
        <label htmlFor="role" className="form-label">Role</label>
        <select 
          className="form-select" 
          id="role" 
          value={role} 
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="Customer">Customer</option>
          <option value="Admin">Admin</option>
        </select>
      </div>
    
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e) => setPassword(e.target.value)}/>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword2" className="form-label">Check Password</label>
        <input type="password" className="form-control" id="exampleInputPassword2" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
      </div>
      
      <button type="submit" className="btn btn-primary" onClick={handleSignup}>SignUp</button>
      <p>
        <Link to='/login'>Login</Link>
      </p>
          
     </div>   
     </div>  
    

    
  
  )
}

export default Signup;
