import AOS from "aos";
import "aos/dist/aos.css";
import { useState, useEffect } from "react";

import { useLocation } from "react-router-dom";

const Information = () => {
  document.title = "SexInfo";

  const search = useLocation().search;

  const target = new URLSearchParams(search).get("target");

  useEffect(() => {
    if (target !== null && target !== undefined) {
      var yOffset = -125;

      const y =
        document.getElementById(target).getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      window.setTimeout(() => {
        window.scrollTo({ top: y, behavior: "smooth" });
      }, 200);
    }
  }, []);

  return (
    <div>
      <div className="informationcorps">
        <div className="gaucheinfo">
          <h2>Qu'est ce qu'une IST ?</h2>
        </div>
        <p>
          Les infections sexuellement transmissibles (IST), autrefois appelées
          maladies sexuellement transmissibles (MST), sont des infections
          pouvant être transmises lors des relations sexuelles, avec ou sans
          pénétration.
        </p>

        <div className="droiteinfo">
          <h2>Qu'est ce que le SIDA ?</h2>
        </div>
        <p>
          Le VIH, virus du sida (Syndrome Immuno Déficience Acquise), serait
          issu d’une mutation d’un virus présent chez certains singes d’Afrique.
          La contamination vers l’homme aurait eu lieu dans les années 1940,
          avant de connaître un essor à la fin des années 1970. Qualifié de «
          cancer gay » aux États-Unis au début des années 1980, le virus a été
          identifié en 1983 à l’institut Pasteur par l’équipe de Luc Montagnier
          et Françoise Barré-Sinoussi. De 1981 à 2006, l’épidémie a tué 25
          millions de personnes. Avec l’arrivée des trithérapies dans les années
          1990, les soins ont beaucoup progressé, il n’existe cependant toujours
          pas de vaccin.
        </p>

        <div className="gaucheinfo">
          <h2>Différences entre sida et VIH :</h2>
        </div>
        <p>
          Le virus de l'immunodéficience humaine (VIH) est un type de virus qui
          attaque le système immunitaire du corps. Bien que l'infection par le
          VIH soit une affection chronique maîtrisable, si elle n'est pas
          traitée, elle peut affaiblir le système immunitaire ou évoluer vers le
          syndrome d'immunodéficience acquise (sida).
        </p>
        <div className="gaucheinfo">
          <h3>Pourquoi ne pas confondre ?</h3>
        </div>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
          rerum. Delectus, minima? Magnam debitis nobis doloremque voluptates
          minima harum et quas quod quo exercitationem, voluptatem assumenda
          ratione accusantium non hic.
        </p>

        <div className="droiteinfo">
          <h2>L'importance du dépistage ?</h2>
        </div>
        <p>
          Le dépistage permet d'accéder au traitement et un traitement efficace
          est un excellent outil de prévention du VIH : il sauve des vies et
          prévient la transmission du VIH. Le traitement du VIH réduit la charge
          virale, c'est-à-dire la quantité de VIH présente dans l'organisme
          d'une personne, à des niveaux indétectables.
        </p>

        <div className="gaucheinfo" id="protection">
          <h2>Comment se protéger ?</h2>
        </div>
        <p>
          Voici des méthodes pour se protéger d'une transmission sexuelle du VIH
          : Relations monogames entre partenaires sains. Rapports sexuels sans
          pénétration. Utilisation systématique et correcte d'un préservatif
          masculin ou féminin.
        </p>

        <div className="droiteinfo">
          <h2>Les soins inexistants ?</h2>
        </div>
        <p>
          Le traitement combiné comportant au moins trois médicaments
          antirétroviraux différents est aujourd'hui devenu la norme pour toutes
          les personnes nouvellement diagnostiquées séropositives au VIH. Le
          traitement antirétroviral combiné empêche le VIH de se multiplier et
          peut faire disparaître le virus dans le sang.
        </p>

        <div className="gaucheinfo">
          <h2>Comment vivre avec ?</h2>
        </div>
        <p>
          Pratiquer une activité physique régulière aide à maintenir une bonne
          santé physique et mentale. Elle stimule le système immunitaire afin de
          mieux lutter contre les infections. Cela permet de rester en bonne
          santé.
        </p>
        <p>
          Aujourd'hui, grâce aux traitements et à une bonne hygiène de vie, une
          personne porteuse du VIH (virus de l'immunodéficience humaine) peut
          avoir la même vie familiale, sociale et professionnelle qu'une
          personne n'ayant pas le virus
        </p>
      </div>
    </div>
  );
};

export default Information;
