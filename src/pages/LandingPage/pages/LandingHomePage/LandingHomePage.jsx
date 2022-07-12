import { isMobile } from "react-device-detect";
import "./LandingHomePage.css";
import NavLandingSocial from "../../components/LandingSocial/LandingSocial";
import NavLanding from "../../components/NavLanding/NavLanding";
import LandingButton from "../../components/LandingButton/LandingButton";
import { Link } from "react-router-dom";

const LandingHomePage = ({ data }) => {
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
              <Link
                to={`/${data.siteInfo.userName}/${data.siteInfo.title}/about`}
              >
                <LandingButton colorData={data.color} type="About" />
              </Link>

              <Link
                to={`/${data.siteInfo.userName}/${data.siteInfo.title}/contectUs`}
              >
                <LandingButton colorData={data.color} type="Contect us" />
              </Link>
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
        style={{ backgroundColor: data.color[6], height: window.innerHeight }}
        className="page col"
        id="LandingHomePageDesk"
      >
        <NavLanding data={data} />
        <main className="row sprade" id="MainLanding">
          <div className="sprade">
            <div
              className="sprade"
              style={{ backgroundColor: data.color[6] }}
              id="MainLandingText"
            >
              <h1 style={{ color: data.color[1] }}>{data.homeContent.title}</h1>
              <h3 style={{ color: data.color[2] }}>
                {data.homeContent.subTitle}
              </h3>
              <p style={{ color: data.color[0] }}>{data.homeContent.text}</p>
              <Link
                to={`/${data.siteInfo.userName}/${data.siteInfo.title}/about`}
              >
                <LandingButton
                  colorData={data.color}
                  type={data.homeContent.buttonLabel}
                />
              </Link>
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
export default LandingHomePage;
