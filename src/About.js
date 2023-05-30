import React from 'react'

import img from "./images/irfan.JPG"
const About = () => {
  return (
    <div className="About" id="about">

       <div className="info">
        
     <center> <img src={img} alt="imag"/></center>  
       
                  
     <center>   <div className="page">
                        <h1>About Me</h1>
                       
               <p>hello i am irfan pathan i am from  basicaly maharashtra but <br/> currently liveing in hyderabd <br/> i have done my gradution in  Dr.baba ambedkar university in B.A <br/>  after that i have done  mern full stack development cource in tolichowki,hyderabad <br/>  now i am serching job for built my fuature   </p>
                          
                        <span className="span "> Contact Details</span> 
                        <button className="btn">    Downlod cv </button>    
                        <p className="p">irfan pathan</p>  
                        <p className="p1"> +91 7820949997 <br></br>
                            irfanashrafpathan@gmail.com
                        </p>
                   
   
                           
                           
                     </div>
                     </center>
                 </div>
                 </div>  
       
      
  )
}

export default About
