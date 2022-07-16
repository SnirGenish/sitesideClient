import BackGround from "../../components/BackGround/BackGround";
import NavBar from "../../components/NavBar/NavBar";
import "./NewSiteCreated.css";
import { isMobile } from "react-device-detect";
import { ImCopy } from "react-icons/im";
const NewSiteCreated = ({ title }) => {
  const userName = JSON.parse(localStorage.getItem("userData")).userName;
  const link = `http://localhost:3000/${userName}/${title}/home`;
  return (
    <div className={isMobile ? "mobilePage" : "page"}>
      <div id="NewSiteCreated" className="page column">
        <NavBar />
        <main className="col sprade  alignCenter mainMain">
          <h1>congratulations</h1>
          <h3>You just created your own site!</h3>
          <div className="Linki row">
            <a id="siteLink" href={link}>
              {link.length < 18 ? link : link.substring(0, 18) + "..."}
            </a>
            <ImCopy
              id="copyBtn"
              onClick={() => navigator.clipboard.writeText(link)}
            />
          </div>
        </main>
      </div>
      <BackGround />
    </div>
  );
};
export default NewSiteCreated;
