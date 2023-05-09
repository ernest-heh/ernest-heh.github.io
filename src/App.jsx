import { useState, useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import Intro from "./components/Intro";
import Portfolio from "./components/Portfolio";
import Stack from "./components/Stack";
import Footer from "./components/Footer";

function App() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <>
      <button
        type="button"
        onClick={handleThemeSwitch}
        className="fixed p-2 z-10 right-4 top-4 text-lg rounded-md hover:dark:bg-neutral-600 hover:bg-neutral-200 transition-colors duration-300"
      >
        {theme === "dark" ? (
          <FiSun className="text-white" />
        ) : (
          <FiMoon className="text-neutral-500" />
        )}
      </button>
      <div className="transition-colors duration-200 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 selection:bg-amber-200 selection:text-neutral-900 dark:selection:text-white dark:selection:bg-orange-400">
        <div className="page flex flex-col min-h-screen max-w-4xl w-11/12 mx-auto">
          <Intro />
          <Portfolio />
          <Stack />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
