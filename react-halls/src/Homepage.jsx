import React from 'react'
import {Link} from 'react-router-dom'

function Homepage() {
  return (
    
   
   <div style={{ width: "100vw", minHeight: "90vh", background: "linear-gradient(to bottom right, #4facfe, #6a11cb)" }}>

  {/* NAVBAR (kept outside hero flex-center box) */}
  <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ backgroundColor: "white" }}>
    <div className="container-fluid">
      <a className="navbar-brand" href="#">TRIUMP</a>

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown"
        aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to='/signup'>Signup/Login</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Features</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  {/* HERO SECTION */}
  <div
    style={{
      width: "100%",
      height: "80vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      color: "white",
      padding: "20px"
    }}
  >
    <h1 style={{ fontSize: "3.2rem", fontWeight: "800", marginBottom: "20px" }}>
      Find the Perfect Hall for Your Special Day
    </h1>

    <p style={{ fontSize: "1.3rem", opacity: 0.9, maxWidth: "700px" }}>
      Discover marriage halls, party halls, engagement venues, and event spaces 
      near you with real photos, pricing, capacity details, and instant booking.
    </p>
  </div>
  <div className="container py-5">
  <div className="row text-center">

    <div className="col-md-4 mb-4">
      <div className="p-4 shadow-lg rounded" style={{ background: "white" }}>
        <h3>Verified Halls</h3>
        <p>Find only trusted, verified, and quality marriage and party halls.</p>
      </div>
    </div>

    <div className="col-md-4 mb-4">
      <div className="p-4 shadow-lg rounded" style={{ background: "white" }}>
        <h3>Transparent Pricing</h3>
        <p>View complete pricing details with no hidden charges.</p>
      </div>
    </div>

    <div className="col-md-4 mb-4">
      <div className="p-4 shadow-lg rounded" style={{ background: "white" }}>
        <h3>Instant Booking</h3>
        <p>Book your desired hall instantly with secure confirmation.</p>
      </div>
    </div>

  </div>
</div>
<div style={{ background: "#f8f9fa", padding: "60px 20px" }}>
  <div className="container">
    
    {/* Section Heading */}
    <h2 className="text-center mb-5" style={{ fontWeight: "700" }}>
      Explore Our Services
    </h2>

    <div className="row text-center">

      {/* Column 1 */}
      <div className="col-md-4 mb-4">
        <div className="p-4 shadow rounded" style={{ background: "white" }}>
          <h3>Marriage Halls</h3>
          <p>
            Find beautiful and spacious marriage halls for your special day with complete amenities and verified details.
          </p>
        </div>
      </div>

      {/* Column 2 */}
      <div className="col-md-4 mb-4">
        <div className="p-4 shadow rounded" style={{ background: "white" }}>
          <h3>Party & Event Halls</h3>
          <p>
            Browse party halls perfect for birthdays, receptions, family functions, and social gatherings.
          </p>
        </div>
      </div>

      {/* Column 3 */}
      <div className="col-md-4 mb-4">
        <div className="p-4 shadow rounded" style={{ background: "white" }}>
          <h3>Corporate Venues</h3>
          <p>
            Choose from conference halls and corporate event spaces suitable for meetings and corporate programs.
          </p>
        </div>
      </div>

    </div>

  </div>
</div>
<footer
  style={{
    backgroundColor: "#1a1a1a",
    color: "white",
    padding: "40px 20px",
    marginTop: "50px"
  }}
>
  <div className="container">
    <div className="row">

      {/* Column 1 */}
      <div className="col-md-4 mb-4">
        <h4 style={{ fontWeight: "700" }}>TRIUMP</h4>
        <p>
          Helping you find the perfect marriage halls, party halls, and event
          venues with ease. Trusted listings with real photos, prices, and availability.
        </p>
      </div>

      {/* Column 2 */}
      <div className="col-md-4 mb-4">
        <h5 style={{ fontWeight: "600" }}>Quick Links</h5>
        <ul style={{ listStyle: "none", padding: 0, lineHeight: "2" }}>
          <li><a href="#" style={{ color: "white", textDecoration: "none" }}>Home</a></li>
          <li><a href="#" style={{ color: "white", textDecoration: "none" }}>Features</a></li>
          <li><a href="#" style={{ color: "white", textDecoration: "none" }}>Find Halls</a></li>
          <li><a href="#" style={{ color: "white", textDecoration: "none" }}>Contact</a></li>
        </ul>
      </div>

      {/* Column 3 */}
      <div className="col-md-4 mb-4">
        <h5 style={{ fontWeight: "600" }}>Contact Us</h5>
        <p>Email: support@triump.com</p>
        <p>Phone: +91 98765 43210</p>
        <p>Location: Chennai, India</p>
      </div>

    </div>

    <hr style={{ borderColor: "#444" }} />

    <div className="text-center mt-3">
      © {new Date().getFullYear()} TRIUMP | All Rights Reserved
    </div>
  </div>
</footer>


</div>

    
  )
}

export default Homepage;
