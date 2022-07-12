import BackGround from "../../components/BackGround/BackGround";
import NavBar from "../../components/NavBar/NavBar";
import lightSaber from "../../../../assets/lightSaber.svg";
import "./HomePage.css";
import { isMobile } from "react-device-detect";
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <div className={isMobile ? "mobilePage" : "page"}>
      <div id="HomePage" className="page column">
        <NavBar />
        <main className="col sprade alignCenter mainMain">
          <img
            src={lightSaber}
            alt="lightSaber"
            id={isMobile ? "lightSaberMobile" : "lightSaber"}
          />
          <h1>the site side is not strong with you?</h1>
          <h3>we've got your back!</h3>
          <Link to="/signUP" className="linkNav">
            sign up
          </Link>
        </main>
      </div>
      <BackGround />
    </div>
  );
};
export default HomePage;
