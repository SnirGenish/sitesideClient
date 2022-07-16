import { useEffect, useState } from "react";
import "./LandingContactPage.css";
import { isMobile } from "react-device-detect";
import { getSite } from "../../../../api/siteApi";
import Spinner from "../../../MainSite/components/Spinner/Spinner";
import LandingBackBtn from "../../components/LandingBackBtn/LandingBackBtn";
import NavLandingSocial from "../../components/LandingSocial/LandingSocial";
import NavLanding from "../../components/NavLanding/NavLanding";
import LandingButton from "../../components/LandingButton/LandingButton";
import { Link } from "react-router-dom";
const LandingContactPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
  const [Email, setEmail] = useState("");
  const [Subject, setSubject] = useState("");
  const [Message, setMessage] = useState("");
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
          <main className="col sprade" id="MainLanding">
            <div className="mobileSprade">
              <div
                style={{ backgroundColor: data.color[6] }}
                className="tLeft"
                id="MainLandingText"
              >
                <h1 style={{ color: data.color[1] }}>Contact Us</h1>
                <h5 style={{ color: data.color[0] }}>Email:</h5>
                <input
                  className="landingInput"
                  type="text"
                  onChange={(e) => setEmail(e.target.value)}
                  value={Email}
                />
                <h5 style={{ color: data.color[0] }}>Subject:</h5>
                <input
                  className="landingInput"
                  type="text"
                  onChange={(e) => setSubject(e.target.value)}
                  value={Subject}
                />
                <h5 style={{ color: data.color[0] }}>Message:</h5>
                <textarea
                  className="landingInput textA"
                  onChange={(e) => setMessage(e.target.value)}
                  value={Message}
                />
                <LandingButton colorData={data.color} type="send" />
                <LandingBackBtn data={data} />
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
          <NavLanding data={data} />
          <main className="row sprade" id="MainLanding">
            <div className="sprade">
              <div className="centerText sprade tLeft" id="MainLandingText">
                <h1 style={{ color: data.color[1] }}>Contact Us</h1>
                <h5 style={{ color: data.color[0] }}>Email:</h5>
                <input className="landingInput" type="text" />
                <h5 style={{ color: data.color[0] }}>Subject:</h5>
                <input className="landingInput" type="text" />
                <h5 style={{ color: data.color[0] }}>Message:</h5>
                <textarea className="landingInput textA" />
                <LandingButton colorData={data.color} type="send" />
              </div>
            </div>
          </main>
        </div>
      );
    }
  }
};
export default LandingContactPage;
