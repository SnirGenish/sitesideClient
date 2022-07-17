import BackGround from "../../components/BackGround/BackGround";
import NavBar from "../../components/NavBar/NavBar";
import lightSaber from "../../../../assets/lightSaber.svg";
import "./HomePage.css";
import { isMobile } from "react-device-detect";
import { Link } from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner";
import { useState } from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
const HomePage = () => {
  const loggedIn = localStorage.getItem("userData");
  const [isSpinning, setIsSpinning] = useState(true);
  useEffect(() => {
    setIsSpinning(false);
  }, []);
  return (
    <div className={isMobile ? "mobilePage" : "page"}>
      <Helmet>
        <title>Siteside | Home</title>
      </Helmet>
      <div id="HomePage" className="page column">
        <NavBar />
        {isSpinning ? (
          <Spinner />
        ) : (
          <main className="col sprade alignCenter mainMain">
            <img
              src={lightSaber}
              alt="lightSaber"
              id={isMobile ? "lightSaberMobile" : "lightSaber"}
            />
            <h1>the site side is not strong with you?</h1>
            <h3>we've got your back!</h3>
            {loggedIn ? (
              <Link to="/newsite" className="linkNav">
                Create a new site
              </Link>
            ) : (
              <Link to="/signUP" className="linkNav">
                sign up
              </Link>
            )}
          </main>
        )}
      </div>
      <BackGround />
    </div>
  );
};
export default HomePage;
