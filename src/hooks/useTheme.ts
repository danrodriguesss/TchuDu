import { useState, useEffect } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) return savedTheme;

    // Fallback para preferência do SO
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    return prefersDark ? "dark" : "light";
  });

  // Sincroniza com o DOM e LocalStorage
  useEffect(() => {
    // Injeta o atributo na tag <html> (ex: <html data-theme="dark">)
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Alternador de tema
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return { theme, toggleTheme };
};
