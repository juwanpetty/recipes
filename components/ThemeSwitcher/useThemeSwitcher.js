import { useEffect, useState } from "react";

// on page load check localstorage
// not interacted, read system pref, set theme
// has interacted, read local storage, set theme
// on click, set theme
// media query on change, set theme

const useThemeSwitcher = () => {
  // const localPref = localStorage.getItem("pageTheme");
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // on page load check localstorage
    if (theme === null || theme === undefined) {
      // not interacted, read system pref, set theme
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? setDark()
        : setLight();
    }
  }, [theme]);

  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        const updatedTheme = event.matches ? "dark" : "light";

        if (theme === "auto") {
          setTheme(updatedTheme);
        }
      });
  }, [theme]);

  const setDark = () => {
    setTheme("dark");
  };

  const setLight = () => {
    setTheme("light");
  };

  const setAuto = () => {
    setTheme("auto");
  };

  return {
    theme,
    setTheme,
    setLight,
    setDark,
    setAuto,
  };
};

export default useThemeSwitcher;
