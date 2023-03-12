import React from "react";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <div>
      <div>
        <h1>
          <img  src="https://lh3.googleusercontent.com/iFE72aP_chwJsQVjtpli6GGKt11I3Ayhs_RCyl9Z-0IsgVEW7VfzJE2cJnUu3Gc9ckEAqmA3p4-N-D0=h360" width="25%" />
          <h3 style={{color:"green"}}>SAYLANI WALFARE</h3>
          <h6 style={{color:"rgb(4,76,156)"}}>ONLINE MARKET PLACE</h6><br></br><br></br><br></br><br></br><br></br>
          <Link  style={{backgroundColor:"green", padding:"10px", marginButtom:"10px",color:"white",textDecoration :"none"}} to="/signup">Get Started</Link>
        </h1>
        <br />
       
      </div>

      <br />
      <br />
      <br />

      <h2>{props.name ? `Welcome - ${props.name}` : "Login please"}</h2>
    </div>
  );
}

export default Home;
