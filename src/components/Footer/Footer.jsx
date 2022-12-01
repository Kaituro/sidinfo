import "./Footer.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const Footer_page = () => {
  return (
    <footer>
      <Link className="footmention" to="/Mention">Mentions Légales</Link>
     <div className="reseaux">
      <h3>Contacts</h3>
      <ul>
        <li><i class="fa-brands fa-instagram"></i></li>
        <li><i class="fa-brands fa-twitter"></i></li>
        <li><i class="fa-brands fa-facebook-f"></i></li>
        </ul></div>
      
    </footer>
  );
};

export default Footer_page;
