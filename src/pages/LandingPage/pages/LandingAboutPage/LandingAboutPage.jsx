import { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import { getSite } from "../../../../api/siteApi";
import Spinner from "../../../MainSite/components/Spinner/Spinner";
import LandingBackBtn from "../../components/LandingBackBtn/LandingBackBtn";
import NavLandingSocial from "../../components/LandingSocial/LandingSocial";
import NavLanding from "../../components/NavLanding/NavLanding";
import { Helmet } from "react-helmet";
const LandingAboutPage = () => {
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
          style={{
            backgroundColor: data.color[6],
            height: window.innerHeight,
            fontFamily: data.font,
          }}
          className="page relative col"
          id="LandingHomePageMobile"
        >
          <Helmet>
            <title>{data.title} | About </title>
          </Helmet>
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
          style={{
            backgroundColor: data.color[6],
            height: window.innerHeight,
            fontFamily: data.font,
          }}
          className="page col"
          id="LandingHomePageDesk"
        >
          <Helmet>
            <title>{data.title} | About</title>
          </Helmet>
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
  }
};
export default LandingAboutPage;
