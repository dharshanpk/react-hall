import React,{useEffect,useState} from 'react';
import {useLocation} from 'react-router-dom';


function Halls() {
    const query=new URLSearchParams(useLocation().search);
    const location=query.get('location');
    const hallType=query.get('hallType');
    const [halls,setHalls]=useState([]);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(null);


    useEffect(() => {
        const fetchedHalls=async() => {
            try{
            const response=await fetch('http://localhost:3000/api/halls/getHallDetails');
            if(!response.ok) throw new Error("Failed to fetch Halls");
            const data=await response.json();
            console.log("DATA FROM BACKEND:", data.halls);
            console.log("QUERY LOCATION:", location);
            console.log("QUERY HALLTYPE:", hallType);
            const filtered= data.halls.filter(
              (hall)=> 
                hall.location === location &&
              hall.hallType==hallType
            );

            
            setHalls(filtered);
        } catch(err){
            setError(err.message);
        }finally{
            setLoading(false);
        }
    }
    fetchedHalls();
    },[]);
    //const filteredHalls=halls.filter((hall) => 
        //hall.location===location && hall.type===hallType);



  return (
  <div
    style={{
      width: "100vw",
      minHeight: "100vh",
      background: "linear-gradient(to bottom right, #4facfe, #6a11cb)",
      margin: 0,
      padding: 0
    }}
  >
  <h2 className="text-center mb-4" style={{ fontWeight: "bold" }}>
    Hall Details
  </h2>

 <div className="container py-4">
  {loading ? (
    <p className="text-center">Loading halls...</p>
  ) : halls.length > 0 ? (
    <div className="row g-4 justify-content-center">
      {halls.map((hall) => (
        <div key={hall.id} className="col-md-4 col-sm-6">
          <div
            className="card shadow-lg h-100"
            style={{
              borderRadius: "12px",
              overflow: "hidden",
              backgroundColor: "#e5dfeaff"
            }}
          >
            <img
              src={hall.image}
              className="card-img-top"
              alt={hall.name}
              style={{ height: "230px", objectFit: "cover" }}
            />
            <div className="card-body">
              <h4 className="card-title text-center" style={{ fontWeight: "600" }}>
                {hall.name}
              </h4>
              <p><strong>Capacity:</strong> {hall.capacity}</p>
              <p><strong>Location:</strong> {hall.location}</p>
              <p><strong>Price:</strong> {hall.pricePerDay}</p>
              <p><strong>Contact:</strong> {hall.contactNumber}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <p className="text-danger text-center">No halls found.</p>
  )}
</div>

</div>

);
}

export default Halls;
