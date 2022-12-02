import "./App.css";
import Navigation_bar from "./components/Navbar/Nav";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Informations from "./pages/Information";
import { Route, Routes } from "react-router-dom";
import Footer_page from "./components/Footer/Footer";
import ThemeButton from "./components/Theme-button/Theme";
import Jeu from "./pages/Jeu";
import Mention from "./pages/Mention";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    if (
      localStorage.getItem("dark_mode") !== undefined &&
      localStorage.getItem("dark_mode") !== null
    ) {
      document.body.classList.add("dark_mode");
      document.getElementById("moon").className = "fas fa-sun";
    }
  }, []);

  return (
    <div>
      <Navigation_bar></Navigation_bar>
      <ThemeButton></ThemeButton>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route
            path="/Informations"
            element={<Informations></Informations>}
          ></Route>
          <Route path="/Jeu" element={<Jeu></Jeu>}></Route>
          <Route path="/Contact" element={<Contact></Contact>}></Route>
          <Route path="/Mention" element={<Mention></Mention>}></Route>
        </Routes>
      </div>
      <Footer_page />
    </div>
  );
}

export default App;
