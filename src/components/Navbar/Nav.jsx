import "./Nav.css";
import { Link, useMatch, useResolvedPath, useNavigate } from "react-router-dom";
import Burger from "../Burger-button/Burger";

const Navigation_bar = () => {
  const navigate = useNavigate();
  const home = () => {
    navigate("/");
  };
  return (
    <header>
      <div className="mobile-top-bar"></div>
      <div className="logo" onClick={() => home()}>
        <img className="imagenav" src="./image/logosida.svg" alt="marche pas" />
        <h1>SexInfo</h1>
      </div>
      <Burger></Burger>

      <nav className="nav" id="nav">
        <CustomLink to="/">Accueil</CustomLink>
        <CustomLink to="/Informations">Informations</CustomLink>
        <CustomLink to="/Jeu">Jouer</CustomLink>
        <CustomLink to="/Contact">Contact</CustomLink>
      </nav>
    </header>
  );
};

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default Navigation_bar;
