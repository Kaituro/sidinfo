import "./Footer.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const Footer_page = () => {
  return (
    <footer>
      <Link to="/Mention">Mentions Légales</Link>
    </footer>
  );
};

// function CustomLink({ to, children, ...props }) {
//   const resolvedPath = useResolvedPath(to);
//   const isActive = useMatch({ path: resolvedPath.pathname, end: true });

//   return (
//     <li className={isActive ? "active" : ""}>
//       <Link to={to} {...props}>
//         {children}
//       </Link>
//     </li>
//   );
// }

export default Footer_page;
