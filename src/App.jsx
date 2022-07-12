import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "./pages/MainSite/pages/AboutPage/AboutPage";
import ContectUs from "./pages/MainSite/pages/ContectUs/ContectUs";
import HomePage from "./pages/MainSite/pages/HomePage/HomePage";
import LogIn from "./pages/MainSite/pages/LogIn/LogIn";
import SignUp from "./pages/MainSite/pages/SignUp/SignUp";
import LandingHomePage from "./pages/LandingPage/pages/LandingHomePage/LandingHomePage";
import "./style/globalStyle.css";
import { testData as data } from "./test-data/test-data";
import UserPage from "./pages/MainSite/pages/UserPage/UserPage";
import NewSite from "./pages/MainSite/pages/NewSite/NewSite";
const App = () => {
  return (
    <div style={{ minHeight: window.innerHeight }} className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contectUs" element={<ContectUs />} />
          <Route path="/LogIn" element={<LogIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route
            path="/:user/:title/home"
            element={<LandingHomePage data={data[0]} />}
          />
          <Route path="/:user/user" element={<UserPage />} />
          <Route path="/newsite" element={<NewSite />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
