import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "./context/themeContext";

function Layout() {
  const [theme, setTheme] = useState("light");

  const lightTheme = () => {
    setTheme("light");
  };

  const darkTheme = () => {
    setTheme("dark");
  };

  //actual change in theme
  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(theme);
  }, [theme]);

  return (
    <ThemeProvider value={{ theme, lightTheme, darkTheme }}>
      <Header />
      <Outlet />
      <Footer />
    </ThemeProvider>
  );
}

export default Layout;
