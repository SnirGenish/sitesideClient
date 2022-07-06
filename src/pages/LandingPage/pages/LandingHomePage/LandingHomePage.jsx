import { isMobile } from "react-device-detect";
import "./LandingHomePage.css";
import NavLandingSocial from "../../components/LandingSocial/LandingSocial";
import NavLanding from "../../components/NavLanding/NavLanding";
import LandingButton from "../../components/LandingButton/LandingButton";
import { testData } from "../../../../test-data/test-data";

const LandingPage = () => {
  const data = testData;

  if (isMobile) {
    return (
      <div
        style={{ backgroundColor: data.color[5] }}
        className="page relative col"
        id="LandingHomePageMobile"
      >
        <main className="colReverse sprade" id="MainLanding">
          <div className="mobileSprade">
            <div
              style={{ backgroundColor: data.color[6] }}
              className="centerText"
              id="MainLandingText"
            >
              <h1 style={{ color: data.color[1] }}>{data.homeContent.title}</h1>
              <h3 style={{ color: data.color[2] }}>
                {data.homeContent.subTitle}
              </h3>
              <p style={{ color: data.color[0] }}>{data.homeContent.text}</p>
              <LandingButton colorData={data.color} type="About" />
              <LandingButton colorData={data.color} type="Contect us" />
            </div>
            <div id="LandingSocialMobilePlaceHolder"></div>
          </div>
          <div
            id="MainLandingImg"
            className="mobileSprade"
            style={{
              background: `url(${data.homeContent.imgUrl})`,
            }}
          ></div>
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
        <NavLanding
          colorsData={data.color}
          LogoData={data.logo}
          socialData={data.Social}
        />
        <main className="row sprade" id="MainLanding">
          <div className="sprade">
            <div className="sprade" id="MainLandingText">
              <h1 style={{ color: data.color[1] }}>{data.homeContent.title}</h1>
              <h3 style={{ color: data.color[2] }}>
                {data.homeContent.subTitle}
              </h3>
              <p style={{ color: data.color[0] }}>{data.homeContent.text}</p>
              <LandingButton
                colorData={data.color}
                type={data.homeContent.buttonLabel}
              />
            </div>
          </div>
          <div
            id="MainLandingImg"
            className="sprade"
            style={{
              background: `url( ${data.homeContent.imgUrl} )`,
            }}
          ></div>
        </main>
      </div>
    );
  }
};
export default LandingPage;
