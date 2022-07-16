import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AboutPage from "./pages/MainSite/pages/AboutPage/AboutPage";
import ContectUs from "./pages/MainSite/pages/ContectUs/ContectUs";
import HomePage from "./pages/MainSite/pages/HomePage/HomePage";
import LogIn from "./pages/MainSite/pages/LogIn/LogIn";
import SignUp from "./pages/MainSite/pages/SignUp/SignUp";
import LandingHomePage from "./pages/LandingPage/pages/LandingHomePage/LandingHomePage";
import "./style/globalStyle.css";
import UserPage from "./pages/MainSite/pages/UserPage/UserPage";
import NewSite from "./pages/MainSite/pages/NewSite/NewSite";
import LandingAboutPage from "./pages/LandingPage/pages/LandingAboutPage/LandingAboutPage";
import NewSiteCreated from "./pages/MainSite/pages/NewSiteCreated/NewSiteCreated";
import { useState } from "react";
import SiteSettings from "./pages/MainSite/pages/SiteSettings/SiteSettings";
import LandingContactPage from "./pages/LandingPage/pages/LandingContactPage/LandingContactPage";

const App = () => {
  const loggedIn = localStorage.userData;
  const [title, setTitle] = useState("");

  return (
    <div style={{ minHeight: window.innerHeight }} className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contectUs" element={<ContectUs />} />
          <Route
            path="/LogIn"
            element={loggedIn ? <Navigate to="/" /> : <LogIn />}
          />
          <Route
            path="/SignUp"
            element={loggedIn ? <Navigate to="/" /> : <SignUp />}
          />
          <Route
            path="/user"
            element={!loggedIn ? <Navigate to="/logIn" /> : <UserPage />}
          />
          <Route
            path="/newsite"
            element={
              !loggedIn ? (
                <Navigate to="/logIn" />
              ) : (
                <NewSite setTitle={setTitle} title={title} />
              )
            }
          />
          <Route
            path="/newSiteCreated"
            element={<NewSiteCreated title={title} />}
          />
          <Route
            path="/sitesettings/:title"
            element={<SiteSettings setTitle={setTitle} />}
          />
          <Route path="/:user/:title/home" element={<LandingHomePage />} />
          <Route path="/:user/:title/About" element={<LandingAboutPage />} />
          <Route
            path="/:user/:title/contactUs"
            element={<LandingContactPage />}
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
