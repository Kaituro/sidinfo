import "./App.css";
import Navigation_bar from "./components/Navbar/Nav";
import Home from "./pages/Home";
import Contact from "./pages/contact";
import Informations from "./pages/Information";
import { Route, Routes } from "react-router-dom";
import Footer_page from "./components/Footer/Footer";
import Mention from "./pages/Mention";
function App() {
  return (
    <div>
      <Navigation_bar></Navigation_bar>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route
            path="/Informations"
            element={<Informations></Informations>}
          ></Route>
          <Route path="/Contact" element={<Contact></Contact>}></Route>
          <Route path="/Mention" element={<Contact></Contact>}></Route>
        </Routes>
      </div>
      <Footer_page />
    </div>
  );
}

export default App;
