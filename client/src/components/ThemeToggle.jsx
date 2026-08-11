import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark"
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      onClick={() =>
        setTheme(theme === "dark" ? "light" : "dark")
      }
      className="  text-white transition"
    >
      {theme === "dark" ? "🌙" : "☀️"}
    </button>
  );
};

export default ThemeToggle;