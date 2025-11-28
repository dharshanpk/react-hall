import { useState } from "react";
import axios from "axios";

function HallUpload() {
  const [formData, setFormData] = useState({
    name: "",
    capacity: "",
    location: "",
    hallType: "",
    pricePerday: "",
    contactNumber: "",
  });

  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();

    // append text fields
    Object.entries(formData).forEach(([key, value]) => data.append(key, value));

    // append file with correct field name
    data.append("image", file);

    try {
      const res = await axios.post(
  "https://react-hall-1.onrender.com",
  data,
  {
    headers: { "Content-Type": "multipart/form-data" },
  }
);;

      
      const result=await res.data;

      if (result.success) {
        alert("Hall Uploaded Successfully!");
      } else {
        alert("Upload Failed: " + result.message);
      }
    } catch (error) {
      console.log("Error uploading:", error);
      alert("Something went wrong!");
    } 
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center vh-100 vw-100" style={{background: "linear-gradient(to bottom right, #4facfe, #6a11cb)"}} >
      <div className="p-4 border rounded shadow bg-white" style={{ width: "350px" }}>
        
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="mb-3">
            <input type="text" placeholder="Name"
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div className="mb-3">
            <input type="text" placeholder="Capacity"
              onChange={(e) => setFormData({ ...formData, capacity: e.target.value })}
            />
          </div>

          <div className="mb-3">
            <input type="text" placeholder="Location"
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            />
          </div>

          <div className="mb-3">
            <input type="text" placeholder="Type"
              onChange={(e) => setFormData({ ...formData, hallType: e.target.value })}
            />
          </div>

          <div className="mb-3">
            <input type="text" placeholder="Price"
              onChange={(e) => setFormData({ ...formData, pricePerday: e.target.value })}
            />
          </div>

          <div className="mb-3">
            <input type="text" placeholder="Contact"
              onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
            />
          </div>

          <div className="mb-3">
            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
          </div>

          <button type="submit">Upload</button>
        </form>
      </div>
    </div>
  );
}

export default HallUpload;
