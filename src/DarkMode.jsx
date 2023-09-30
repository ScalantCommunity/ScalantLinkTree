import { useEffect, useState } from "react";
import sunImg from "./images/sun.png";
import moonImg from "./images/moon.png";

const DarkMode = () => {
  const [theme, setTheme] = useState("dark-theme");
  const [icon, setIcon] = useState(sunImg);
  const toggleTheme = () => {
    if (theme == "white-theme") {
      setTheme("dark-theme");
      setIcon(sunImg);
    } else {
      setTheme("white-theme");
      setIcon(moonImg);
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <>
      <nav>
        <ul>
          <li>
            <img
              id="darkMode"
              src={icon}
              alt="sun image"
              onClick={() => toggleTheme()}
            />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default DarkMode;
