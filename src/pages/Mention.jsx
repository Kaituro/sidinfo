const Mention = () => {
  document.title = "SexInfo";

  window.scrollTo({
    behavior: "smooth",
    top: 0,
  });
  document.title = "SexInfo";

  return (
    <div className="conteneur_mention">
      <h1>Mentions légales</h1>
      <p>
        <span>Éditeur du Site :</span> Equipe Champ.py nuit de l'informatique
        2022
        <br />
        <span>Responsable éditorial :</span> Valentin Merrault
        <br />
        <span>Email : </span> jorivi500@gmail.com
      </p>
      <p>
        <span>Hébergement :</span>
        <br />
        <span>Hébergeur :</span>
        <br />
        <span>Développement :</span> Valentin Merrault et Josian Riviere equipe
        Champ.py nuit de l'informatique 2022
      </p>

      <p>
        <span>Conditions d’utilisation :</span>
        <br />
        Ce site (www.anthedesign.fr) est proposé en différents langages web
        (HTML, HTML5, Javascript, CSS, etc…) pour un meilleur confort
        d’utilisation et un graphisme plus agréable.
        <br />
        Nous vous recommandons de recourir à des navigateurs modernes comme
        Internet explorer, Safari, Firefox, Google Chrome, etc…
        <br />
      </p>
      <p>
        <span>Liens hypertextes :</span>
        <br /> Les sites internet de peuvent offrir des liens vers d’autres
        sites internet ou d’autres ressources disponibles sur Internet. Nous ne
        disposons d’aucun moyen pour contrôler les sites en connexion avec ses
        sites internet.
        <br />
        Tout contenu téléchargé se fait aux risques et périls de l’utilisateur
        et sous sa seule responsabilité. En conséquence, ne saurait être tenu
        responsable d’un quelconque dommage subi par l’ordinateur de
        l’utilisateur ou d’une quelconque perte de données consécutives au
        téléchargement.
        <br />
        De plus, l’utilisateur du site s’engage à accéder au site en utilisant
        un matériel récent, ne contenant pas de virus et avec un navigateur de
        dernière génération mis-à-jour.
      </p>
      <p>
        <span>Déclaration à la CNIL :</span>
        <br />
        Conformément à la loi 78-17 du 6 janvier 1978 (modifiée par la loi
        2004-801 du 6 août 2004 relative à la protection des personnes physiques
        à l’égard des traitements de données à caractère personnel) relative à
        l’informatique, aux fichiers et aux libertés, ce site a fait l’objet
        d’une déclaration 1656629 auprès de la Commission nationale de
        l’informatique et des libertés (www.cnil.fr).
      </p>
    </div>
  );
};

export default Mention;
