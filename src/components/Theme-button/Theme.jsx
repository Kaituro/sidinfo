import "./style.css";
const Theme = () => {
  const swap = () => {
    const classList = document.body.classList;
    const ico = document.getElementById("moon");

    if (classList.contains("dark_mode")) {
      classList.remove("dark_mode");
      ico.className = "fas fa-moon";
      localStorage.removeItem("dark_mode");
    } else {
      classList.add("dark_mode");
      localStorage.setItem("dark_mode", "enabled");
      ico.className = "fas fa-sun";
    }
  };
  return (
    <>
      <div id="theme_change" onClick={() => swap()}>
        <i id="moon" class="fas fa-moon"></i>
      </div>
    </>
  );
};

export default Theme;
