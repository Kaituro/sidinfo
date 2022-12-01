const Home = () => {
  document.title = "SexInfo";

  return (
    <div>
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

      <div className="fil"></div>

      <div className="slide">
        <div className="protect">
          <div className="p-text">
            <h1>Se protéger</h1>
            <p>Utilisations de contracesptifs (préservatifs, pillules...)</p>
          </div>
          <div className="p-img">
            <i class="fa fa-shield" aria-hidden="true"></i>
          </div>
        </div>

        <div className="protect-2 pp">
          <div className="p-img">
            <i class="fas fa-comment-alt" aria-hidden="true"></i>
          </div>

          <div className="p-text">
            <h1>Communiquer</h1>
            <p>SEXprimer c’est important !</p>
          </div>
        </div>

        <div className="protect pp">
          <div className="p-text">
            <h1>S’informer</h1>
            <p>UIl faut s’informer sur les sites dédiés !</p>
          </div>
          <div className="p-img">
            <i class="fa fa-bookmark" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
