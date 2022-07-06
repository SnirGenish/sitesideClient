import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingAboutPage from "./pages/LandingPage/pages/LandingAboutPage/LandingAboutPage";
import LandingHomePage from "./pages/LandingPage/pages/LandingHomePage/LandingHomePage";
import "./style/globalStyle.css";
const App = () => {
  return (
    <div
      style={{ width: window.innerWidth, height: window.innerHeight }}
      className="App"
    >
      <BrowserRouter>
        <Routes>
          <Route path="/:user/:site/home" element={<LandingHomePage />} />
          <Route path="/:user/:site/about" element={<LandingAboutPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
