import "./Footer.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const Footer_page = () => {
  return (
    <footer>
      <Link className="footmention" to="/Mention">
        <h2>Mentions Légales</h2>
        
      </Link>
      <div className="reseaux">
        <h2>Contacts</h2>
        <ul>
          <li>
          <a href="https://www.instagram.com/sida_info_service/"> <i class="fa fa-instagram" aria-hidden="true"></i></a>
           
          </li>
          <li>
            <a href="https://twitter.com/SidaInfoService">  <i class="fa fa-twitter" aria-hidden="true"></i></a>          
          </li>
          <li>
            <a href="https://www.facebook.com/SidaInfoService"><i class="fa fa-facebook" aria-hidden="true"></i></a>
            
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer_page;
