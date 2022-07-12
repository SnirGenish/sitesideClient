import { isMobile } from "react-device-detect";
import LandingBackBtn from "../../components/LandingBackBtn/LandingBackBtn";
import NavLandingSocial from "../../components/LandingSocial/LandingSocial";
import NavLanding from "../../components/NavLanding/NavLanding";
const LandingAboutPage = ({ data }) => {
  if (isMobile) {
    return (
      <div
        style={{ backgroundColor: data.color[6] }}
        className="page relative col"
        id="LandingHomePageMobile"
      >
        <main className="col sprade" id="MainLanding">
          <div className="mobileSprade">
            <div
              style={{ backgroundColor: data.color[6] }}
              className="centerText"
              id="MainLandingText"
            >
              <h1 style={{ color: data.color[1] }}>
                {data.aboutContent.title}
              </h1>
              <LandingBackBtn data={data} />

              <p style={{ color: data.color[0] }}>{data.aboutContent.text}</p>
            </div>
            <div id="LandingSocialMobilePlaceHolder"></div>
          </div>
        </main>
        <div
          style={{ backgroundColor: data.color[4] }}
          id="LandingSocialMobile"
        >
          <NavLandingSocial colorsData={data.color} socialData={data.Social} />
        </div>
      </div>
    );
  } else {
    return (
      <div
        style={{ backgroundColor: data.color[6] }}
        className="page col"
        id="LandingHomePageDesk"
      >
        <NavLanding data={data} />
        <main className="row sprade" id="MainLanding">
          <div className="sprade">
            <div className="centerText sprade" id="MainLandingText">
              <h1 style={{ color: data.color[1] }}>
                {data.aboutContent.title}
              </h1>
              <p style={{ color: data.color[0] }}>{data.aboutContent.text}</p>
            </div>
          </div>
        </main>
      </div>
    );
  }
};
export default LandingAboutPage;
