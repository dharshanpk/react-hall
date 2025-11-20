import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import {Link} from 'react-router-dom'


function Dashboard() {
    const[hallType,setHallType]=useState("");
    const[location,setLocation]=useState("");
    
    const[error,setError]=useState("");
   
    const navigate=useNavigate();

    const handleSubmit= async () => {
        if(!location || !hallType){
            setError("Please select both location and hall type");
            return;
        }
        setError("");
        navigate(`/halls?location=${location}&hallType=${hallType}`);
           
    };
  return (
    <div className='d-flex justify-content-center align-items-center vh-100 vw-100'
    style={{background: "linear-gradient(to bottom right, #4facfe, #6a11cb)"}} >
    <div className='p-4 border rounded shadow bg-white' style={{width:"350px"}}>
    <div className='mt-4'>
        <h2 className='mb-4'>Dashboard</h2>
        <div className='mb-3'>
            <label htmlFor='location' className='form-label' >
                Select Location
            </label>
            <select 
                id="location"
                className='form-select'
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                >
                <option value="">-- Select Location --</option>
                <option value="Chennai">Chennai</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Kolkata">Kolkata</option>
                <option value="Mumbai">Mumbai</option>
            </select>
        </div>

        <div className='mb-3'>
            <label htmlFor='hallType' className='form-label'>
                Select HallType
            </label>
            <select
                id="hallType"
                className='form-select'
                value={hallType}
                onChange={(e) => setHallType(e.target.value)}
                >
                <option value="">--Select Hall Type</option>
                <option value="Marriage">Marriage Hall</option>
                <option value="Party Hall">Party Hall</option>
                <option value="Conference Hall">Conference Hall</option>
                <option value="Banquet Hall">Banquet Hall</option>
                </select>
        </div>

        <button className='btn btn-success mb-4' onClick={handleSubmit}>Get Halls</button>
        {error && <div className='text-danger mb-3'>{error}</div>}
        
        </div>
      </div>
  </div>


  )
}

export default Dashboard
