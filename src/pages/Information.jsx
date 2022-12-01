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
      <div className="h_box">
        <h1>Information</h1>
       
        
      </div>
    </div>
  );
};

export default Information;
