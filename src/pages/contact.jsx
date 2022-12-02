import React from "react";

const Contact = () => {
  document.title = "SexInfo";
  window.scrollTo({
    behavior: "smooth",
    top: 0,
  });
  return (
    <>
      <div className="contactinfo">
        <div className="welcome-text">
          <h1 className="titrecontact">Nous contacter</h1>
          <ul>
            <li>
              <span>Tel :</span> 0 800 00 69 07
            </li>
            <li>
              <span>Mail :</span> vltdev.pro@gmail.com
            </li>
            <li>
              <span>Web : </span>
              https://www.sida-info-service.org/
            </li>
          </ul>
        </div>

        <img className="img-container" src="image/logosida.svg" />
      </div>
    </>
  );
};

export default Contact;
