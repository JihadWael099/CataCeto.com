import React, { useState } from "react";

const Main = () => {
  const [imgURl,setimg]=useState("https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg");
 
  const change_img=()=>{
    fetch("https://api.thecatapi.com/v1/images/search")
    .then(res=>res.json())
    .then(data=>setimg(data[0].url));

  }

  return (

    <div className="container">
      <div className="main">
        <h1>CataCeto.com</h1>
        <img src={imgURl} alt="nun"></img>
        <br></br>
        <button onClick={()=>change_img()}>More cats</button>
        
      </div>
    </div>
  );
};
export default Main;
