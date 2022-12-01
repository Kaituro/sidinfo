import "./App.css";
import Navigation_bar from "./components/Navbar/Nav";
import Home from "./pages/Home";
import Contact from "./pages/contact";
import Informations from "./pages/Information";
import { Route, Routes } from "react-router-dom";

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
        </Routes>
      </div>
    </div>
  );
}

export default App;
