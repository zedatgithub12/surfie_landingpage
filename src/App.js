import "./App.css";
import "./themes.css";
import React, { useEffect, useState } from "react";
import Home from "./pages/Home";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CreateAccount from "./pages/CreateAccount";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import IconButton from "@mui/material/IconButton";

import { ThemeContext } from "./components/ThemeContext";
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="position-fixed bottom-0 end-0 m-5 pe-1 overflow-visible zindex-tooltip">
        <IconButton
          className="w-100 h-100 rounded-circle blur p-3 shadow "
          style={{ backgroundColor: 'var(--sec-bg)', color: 'var(--text-color)' }}
          onClick={toggleTheme}
          aria-label="toggle"
        >
          {theme === "dark" ? (
            <BsFillSunFill size={24} />
          ) : (
            <BsFillMoonStarsFill size={24} />
          )}
        </IconButton>
      </div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/account" element={<CreateAccount />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;
