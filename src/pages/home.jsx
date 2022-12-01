import AOS from "aos";
import "aos/dist/aos.css";
import { useState, useEffect } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const Home = () => {
  document.title = "SexInfo";

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div>
      <div className="h_box">
        <div className="welcome-text">
          <h1
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
          >
            <span>Bienvenue</span>,
          </h1>
          <h2
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-delay="1000"
            data-aos-once="true"
          >
            vous pouvez naviguer sur ce site pour vous amuser et vous renseigner
            sur les maladies sexuellement transmissibles.
            <br></br>
            <Link className="link-to">Jouer →</Link>
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
            <h1
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-offset="300"
              data-aos-once="true"
            >
              Se protéger
            </h1>
            <p
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-delay="500"
              data-aos-offset="300"
              data-aos-once="true"
            >
              Utilisations de contracesptifs (préservatifs, pillules...)
            </p>
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
            <h1
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-offset="400"
              data-aos-once="true"
            >
              CommuNIQUER
            </h1>
            <p
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-delay="500"
              data-aos-once="true"
            >
              SEXprimer c’est important !
            </p>
          </div>
        </div>

        <div className="protect pp">
          <div className="p-text">
            <h1
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-offset="400"
              data-aos-once="true"
            >
              S’informer
            </h1>
            <p
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-delay="500"
              data-aos-once="true"
            >
              Il faut s’informer sur les sites dédiés !
            </p>
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
