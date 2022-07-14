import { isMobile } from "react-device-detect";
import "./LandingHomePage.css";
import NavLandingSocial from "../../components/LandingSocial/LandingSocial";
import NavLanding from "../../components/NavLanding/NavLanding";
import LandingButton from "../../components/LandingButton/LandingButton";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getSite } from "../../../../api/siteApi";
import Spinner from "../../../MainSite/components/Spinner/Spinner";

const LandingHomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
  const location = document.URL;
  const userName = location.split("/")[4];
  const siteName = location.split("/")[3];
  useEffect(() => {
    const gettingData = async () => {
      const site = await getSite(userName, siteName);
      setData(await site.data);
      setIsLoading(false);
    };
    gettingData();
  }, []);
  if (isLoading) {
    return <Spinner />;
  } else {
    if (isMobile) {
      return (
        <div
          style={{ backgroundColor: data.color[6], height: window.innerHeight }}
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
                <h1 style={{ color: data.color[1] }}>
                  {data.homeContent.title}
                </h1>
                <h3 style={{ color: data.color[2] }}>
                  {data.homeContent.subTitle}
                </h3>
                <p style={{ color: data.color[0] }}>{data.homeContent.text}</p>
                <Link to={`/${data.username}/${data.title}/about`}>
                  <LandingButton colorData={data.color} type="About" />
                </Link>

                <Link to={`/${data.username}/${data.title}/contectUs`}>
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
            <NavLandingSocial
              colorsData={data.color}
              socialData={data.Social}
            />
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
                <h1 style={{ color: data.color[1] }}>
                  {data.homeContent.title}
                </h1>
                <h3 style={{ color: data.color[2] }}>
                  {data.homeContent.subTitle}
                </h3>
                <p style={{ color: data.color[0] }}>{data.homeContent.text}</p>
                <Link to={`/${data.username}/${data.title}/about`}>
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
  }
};
export default LandingHomePage;
