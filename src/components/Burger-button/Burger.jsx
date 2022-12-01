import "./burger.css";
import { useRef } from "react";

const Burger = () => {
  const burgerRef = useRef();

  const enable = (e) => {
    burgerRef.current.classList.toggle("open");
    document.getElementById("nav").classList.toggle("nav-open");
  };

  return (
    <div ref={burgerRef} id="nav-icon3" onClick={() => enable()}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default Burger;
