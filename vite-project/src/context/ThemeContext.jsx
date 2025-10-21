import { createContext, useContext, useState, useEffect } from "react";

// 1️⃣ Create the context
const ThemeContext = createContext();

// 2️⃣ Create the provider component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // load the theme from localStorage if it exists
    return localStorage.getItem("theme") || "light";
  });

  // 3️⃣ Update <html> class and localStorage when theme changes
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  // 4️⃣ Toggle function
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 5️⃣ Custom hook for easy use
export const useTheme = () => useContext(ThemeContext);
