import "./Nav.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const Navigation_bar = () => {
  return (
    <header>
      <div className="mobile-top-bar"></div>
      <div className="logo">
        <img src="./image/logosida.svg" alt="marche pas" />
        <h1>SexInfo</h1>
      </div>

      <nav className="nav" id="nav">
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/Informations">Informations</CustomLink>
        <CustomLink to="/Jeu">Jeu</CustomLink>
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
