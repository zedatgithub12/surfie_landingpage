import "./App.css";
import "./themes.css";
import React, { useEffect, useState } from "react";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CreateAccount from "./pages/CreateAccount";
import Auth from "./pages/Signin";
import { AuthContext } from "./context";
import { PrivateRoute } from "./routes/privateroute";
import ChangePassword from "./pages/ChangePassword";
import Forgotpass from "./pages/ForgotPass";
import ResetPassword from "./pages/ResetPassword";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import IconButton from "@mui/material/IconButton";
import { ThemeContext } from "./components/ThemeContext";
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("themes") ? localStorage.getItem("themes") : "light"
  );

  const [loged, setLoged] = useState(false);
  const [user, setUser] = useState({
    fname: "",
    mname: "",
    lname: "",
    email: "",
    phone: "",
    organization: "",
    referralcode: "",
    balance: "0",
    noreferral: "0",
    status: "",
  });

  const authContext = React.useMemo(
    () => ({
      user,

      SignIn: async (status, users) => {
        if (status === "Signed") {
          sessionStorage.setItem("user", JSON.stringify(users));
          sessionStorage.setItem("token", JSON.stringify(users.first_name));
          setLoged(true);
        } else {
          setLoged(false);
        }
      },
      SignOut: async (status) => {
        if (status === "Signout") {
          sessionStorage.clear();
          setLoged(false);
        }
        {
          setLoged(false);
        }
      },
      getToken: async () => {
        const tokenString = sessionStorage.getItem("token");
        const userToken = JSON.parse(tokenString);
        return userToken;
      },
      getUser: async () => {
        const userString = sessionStorage.getItem("user");
        const userDetails = JSON.parse(userString);
        return userDetails;
      },
      isLoggedIn: loged,
    }),
    []
  );

  useEffect(() => {
    var tokens = sessionStorage.getItem("token");
    if (tokens !== null) {
      setLoged(true);
    }
    return () => {};
  }, [loged]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("themes", theme);
    return () => {};
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <AuthContext.Provider value={authContext}>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div
          className="position-fixed bottom-0 end-0 m-5 pe-1 overflow-visible zindex-tooltip"
          id="themeController"
        >
          <IconButton
            className="w-100 h-100 rounded-circle blur p-3 shadow "
            style={{
              backgroundColor: "var(--sec-bg)",
              color: "var(--text-color)",
            }}
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
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route path="/features" element={<Features />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="auth" element={<Auth />} />
            <Route path="/account" element={<CreateAccount />} />
            <Route path="/changepassword" element={<ChangePassword />} />
            <Route path="/forgotpass" element={<Forgotpass />} />
            <Route path="/reset-password/:token" element={<ResetPassword />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </ThemeContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
