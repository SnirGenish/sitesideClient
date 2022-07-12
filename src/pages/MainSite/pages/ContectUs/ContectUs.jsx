import BackGround from "../../components/BackGround/BackGround";
import NavBar from "../../components/NavBar/NavBar";
import "./ContectUs.css";
import { isMobile } from "react-device-detect";
const ContectUs = () => {
  return (
    <div className={isMobile ? "mobilePage" : "page"}>
      <div id="ContectUs" className="page column">
        <NavBar />
        <main className="col sprade  alignCenter mainMain"></main>
      </div>
      <BackGround />
    </div>
  );
};
export default ContectUs;
