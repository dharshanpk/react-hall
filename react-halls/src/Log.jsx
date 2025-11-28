import React from 'react'
import {useState} from 'react'
import {Link,useNavigate} from "react-router-dom";
function Log() {
  const [email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const[error,setError]=useState("");
  const[loading,setLoading]=useState(false);
  const navigate=useNavigate();

  const checkPassword = async() => {
    if (!email || !password){
      setError("Please enter both email and password");
      return;
    }

    setLoading(true);

    try{
      const response= await fetch(
        'https://react-hall-1.onrender.com/login',{
          method:"POST",
          headers:{
            "Content-Type":"application/json",
          },
          body: JSON.stringify({email,password}),
        }
      );
      const data=await response.json();

      if(data.success){
        setError("");
        if(data.user.role=="Admin"){
          navigate("/HallUpload");
        }else{
         navigate("/dashboard");
        }}
      else{
        setError("Invalid email or password");
      }
    } catch(err) {
      console.error(err);
      setError("Something went wrong,please try again");
      alert("went wrong");
    }
    setLoading(false);
  };
  

  
  return (
  
      <div className='container-fluid d-flex justify-content-center align-items-center vh-100 vw-100'
      style={{background: "linear-gradient(to bottom right, #4facfe, #6a11cb)"}} >
      <div className='p-4 border rounded shadow bg-white' style={{width:"350px"}}>
      <form onSubmit={(e) => { e.preventDefault(); checkPassword(); }}>
      <h4 className='text-center mb-3'>Login</h4>
      {error && (
        <div className='alert alert-danger py-2 text-center'>{error}</div>
      )}
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input
      type="email"
      className="form-control"
      id="exampleInputEmail1"
      autoComplete="email"
      onChange={(e) => setEmail(e.target.value)}
      disabled={loading}
    />
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input
      type="password"
      className="form-control"
      id="exampleInputPassword1"
      autoComplete="current-password"
      onChange={(e) => setPassword(e.target.value)}
      disabled={loading}
    />
  </div>
  

  <button type="submit" className="btn btn-primary" disabled={loading}>Login
    
  </button>
</form>
          <p className='mt-3'>
            <Link to='/signup'>Create an account</Link>
        </p>
    </div>
    </div>
    
      
  
  )
}

export default Log
