import React from "react";

const Contact = () => {
    document.title = "SexInfo";
  
    return (
      <>
       
        <div className="contactinfo"> 
        <div className="welcome-text">  
         <h1 className="titrecontact">Nous contacter</h1>
        <ul>
        <li><span>Tel :</span> 0 800 00 69 07</li>
        <li><span>Mail :</span> jsp.test@gmail.com</li>
        <li> <span>Web :</span> www.test.html.sida</li>        
        </ul>
        </div>
     
<img  className="img-container" src="image/logosida.svg" />
        </div>

        </>
    );
  };
  
  export default Contact;
