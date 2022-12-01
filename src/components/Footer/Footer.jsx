import "./Footer.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const Footer_page = () => {
  return (
    <footer>
      <Link className="footmention" to="/Mention">
        Mentions Légales
      </Link>
      <div className="reseaux">
        <h3>Contacts</h3>
        <ul>
          <li>
            <i class="fa fa-instagram" aria-hidden="true"></i>
          </li>
          <li>
            <i class="fa fa-twitter" aria-hidden="true"></i>
          </li>
          <li>
            <i class="fa fa-facebook" aria-hidden="true"></i>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer_page;
