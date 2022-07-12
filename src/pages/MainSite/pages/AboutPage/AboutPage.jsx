import BackGround from "../../components/BackGround/BackGround";
import NavBar from "../../components/NavBar/NavBar";
import "./AboutPage.css";
import { isMobile } from "react-device-detect";
const AboutPage = () => {
  return (
    <div className={isMobile ? "mobilePage" : "page"}>
      <div id="AboutPage" className="page column">
        <NavBar />
        <main className="col sprade  alignCenter mainMain">
          <h1>About</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic sequi
            iure beatae vero quia nam cupiditate repellendus, recusandae
            accusantium itaque ipsum officiis? Quis tenetur iusto iure
            voluptatibus, quo temporibus libero quos ut dolorum nihil. Ipsa
            velit eligendi dignissimos aliquam voluptas est accusantium, dolorum
            corrupti veniam quisquam harum corporis, iusto placeat.
          </p>
        </main>
      </div>
      <BackGround />
    </div>
  );
};
export default AboutPage;
