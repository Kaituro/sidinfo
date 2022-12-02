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
          pénétration. La plus tristement célèbre est le sida mais il en existe
          d’autres comme l’hépatite B, l’herpès, la syphilis, etc. Il existe un
          traitement pour chacune mais seuls le dépistage et les préservatifs
          permettent de réellement s’en protéger.
        </p>

        <div className="droiteinfo">
          <h2>Comment se protéger ?</h2>
        </div>
        <p>
          Pour se protéger il faut utiliser un préservatif pour toute
          pénétration mais aussi pour la fellation. Rassurez-vous, le
          préservatif masculin n’est pas la seule solution : il existe des
          préservatifs féminins(lien?) et, pour le cunnilingus ou l’anulingus,
          une digue dentaire peut être utilisée. Certains traitements permettent
          aussi de se protéger efficacement. Par exemple, il existe un vaccin
          contre l’hépatite B et La PrEP(lien) permet d’être protégé du VIH pour
          tout rapport sexuel. Une solution sans médicament consiste à n’avoir
          de rapport qu’avec des personnes qui ont effectué des dépistages et
          n’ont eu aucun rapport à risque depuis.
        </p>

        <div className="gaucheinfo">
          <h2>L'importance du dépistage ?</h2>
        </div>
        <p>
          La plupart des IST se soignent efficacement si le traitement adéquat
          est commencé assez tôt, dans le cas contraire il peut arriver de
          graves complications. C’est pourquoi il est important de se faire
          dépister régulièrement dans le cas de multiples rapports à risque. Il
          est aussi conseillé d’effectuer un dépistage avant d’arrêter
          d’utiliser le préservatif avec son/sa conjoint/e.
          <br></br>Il existe de nombreux lieux pour se faire dépister autour de
          vous. N’hésitez pas à vous renseigner dans les associations de votre
          ville, ils vous redirigeront vers les endroits appropriés. Sinon,
          voici quelques sites répertoriant des centre de dépistages en France :
        </p>

        <div className="droiteinfo" id="protection">
          <h2>Comment se protéger ?</h2>
        </div>
        <p>
          Voici des méthodes pour se protéger d'une transmission sexuelle du VIH
          : Relations monogames entre partenaires sains. Rapports sexuels sans
          pénétration. Utilisation systématique et correcte d'un préservatif
          masculin ou féminin.
          <br></br>
          <br></br>
          Liens :<br></br> <br></br>
          <a
            className="link-infos"
            target="_blank"
            href="https://www.sida-info-service.org/ou-faire-un-test-de-depistage-du500/"
          >
            Sida Info Service
          </a>
          <br></br> <br></br>
          <a
            className="link-infos"
            target="_blank"
            href="https://www.aides.org/depistage-vih-sida?gclid=Cj0KCQiAvqGcBhCJARIsAFQ5ke42WgGE38-94SeAGckW-8jGGKxbcXZd_03AVBaeQyKHSIBMSKaOyrIaAk6yEALw_wcB"
          >
            Aides
          </a>
          <br></br> <br></br>
        </p>

        <div className="droiteinfo">
          <h2>Les principaux préjugés :</h2>
        </div>
        <p>
          “Je le saurais si mon/ma partenaire ou moi avait une IST” Il arrive
          souvent que les symptômes d’une IST soient peu visibles voir absents.
          Et pourtant le porteur est tout de même contagieux; il est donc
          important de se faire dépister avant d’arrêter de se protéger.
        </p>

        <p>
          “Il n’y a aucun risque s’il n’y a pas d’éjaculation” Tout au long de
          l’acte il y a des sécrétions vaginales ou du liquide séminale qui
          peuvent transmettre de potentielles IST. C’est pourquoi mettre lors
          d’un rapport oral il faut se protéger.
        </p>

        <p>
          “Le sida peut se transmettre en s’embrassant” Non, le sida ne se
          transmet pas en s’embrassant. Cependant d’autres maladies, telles que
          la mononucléose et l’herpès labial, oui. Il n’existe malheureusement
          pas que le sida mais, heureusement, la plupart des autres IST peuvent
          se soigner si elles sont dépistées et traitées au plus tôt.
        </p>

        <p>“Ce sont surtout les relations homosexuelles qui sont à risque”</p>

        <p>
          Toute relation sexuelle sans protection est à risque. Quelle que soit
          l’orientation des participants, le risque existe et est à prendre en
          compte.
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
          personne n'ayant pas le virus.
        </p>

        <div className="droiteinfo" id="ecouter">
          <h2>S'exprimer, être écouté :</h2>
        </div>
        <p>
          Il existe surement des associations dans votre ville qui pourront vous
          accueillir, vour informer et vous rediriger si besoin vers les
          infrastructures que vous recherchez. Voici, en plus, quelques
          ressources en ligne indiquant des lieux/moyens d'expressions et
          d'écoute sur les IST et d'autre sujets liés.
        </p>
      </div>
    </div>
  );
};

export default Information;
