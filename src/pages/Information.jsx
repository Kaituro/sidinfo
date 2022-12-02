import AOS from "aos";
import "aos/dist/aos.css";
import { useState, useEffect } from "react";

const Information = () => {
  document.title = "SexInfo";

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div>
      <div className="informationcorps">
        
        <div className="gaucheinfo">
        <h2>Qu'est ce qu'une IST ?</h2>
        <p></p>  
        </div>
        
    <div className="droiteinfo">
<h2>Qu'est ce que le SIDA ?</h2>
        <p></p>

    </div>
        
    <div className="gaucheinfo">
       <h2>Différences entre sida et VIH :</h2>
        <p></p>
        <h3>Pourquoi ne pas confondre ?</h3>
        <p></p>
    </div>
       
<div className="droiteinfo">
<h2>L'importance du dépistage ?</h2>
        <p></p>
</div>
        
    <div className="gaucheinfo">
      <h2>Comment se protéger ?</h2>
        <p></p>
    </div>
        
    <div className="droiteinfo">
      <h2>Les soins inexistants ?</h2>
        <p></p>
    </div>
        
    <div className="gaucheinfo">
      <h2>Comment vivre avec ?</h2>
        <p></p>
    </div>      
        
      </div>
    </div>
  );
};

export default Information;
