import React from "react";
import './Name.css'
function Name({ Title, Img }) {
  return (
    <div className="Name">
      <img src={Img} alt={Title} className="animal-image" />
      <h3>{Title}</h3>
      

    </div>
  );
}


export default Name;