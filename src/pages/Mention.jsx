const Mention = () => {
  document.title = "SexInfo";

  window.scrollTo({
    behavior: "smooth",
    top: 0,
  });
  return (
    <div className="h_box">
      <div className="welcome-text">
        <h1>
          <span>Bienvenue</span>,
        </h1>
        <h2>
          vous pouvez naviguer sur ce site pour vous amuser et vous renseigner
          sur les maladies sexuellement transmisbiles.
        </h2>
      </div>

      <div className="img-container">
        <img src="./image/logosida.svg" alt="marche pas" />
      </div>
    </div>
  );
};

export default Mention;
