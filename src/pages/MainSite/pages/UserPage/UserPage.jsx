import "./UserPage.css";
import NavBar from "../../components/NavBar/NavBar";
import BackGround from "../../components/BackGround/BackGround";
import { isMobile } from "react-device-detect";
import plus from "../../../../assets/plus.svg";
import { Link, useNavigate } from "react-router-dom";
import { getUser, logOut } from "../../../../api/userApi";
import { useEffect, useState } from "react";
import Spinner from "../../components/Spinner/Spinner";
import { Helmet } from "react-helmet";
const UserPage = () => {
  const [sites, setSites] = useState([]);
  const [spinning, setSpinning] = useState(false);
  const navigate = useNavigate();
  const loggedIn = JSON.parse(localStorage.getItem("userData"));
  useEffect(() => {
    const getSites = async () => {
      setSpinning(true);
      const user = await getUser();
      const mappedsites = await user.sites.map((site) => {
        setSpinning(false);
        return (
          <div
            key={site.id}
            to={`/${loggedIn.userName}/${site.title}/home`}
            className="siteS"
          >
            <div
              className="siteLogo"
              onClick={() => {
                navigate(`/${loggedIn.userName}/${site.title}/home`);
              }}
            >
              {site.logo.isText ? (
                <div
                  style={{ color: site.color, fontFamily: site.font }}
                  className="siteLogoText"
                >
                  {site.logo.text}
                </div>
              ) : (
                <img src={site.logo.url} alt="logo" />
              )}
            </div>
            <div>
              <div
                className="siteName"
                onClick={() => {
                  navigate(`/${loggedIn.userName}/${site.title}/home`);
                }}
              >
                {site.title}
              </div>
              <button
                className="settingBtn"
                onClick={() => {
                  navigate(`/sitesettings/${site.title}`);
                }}
              >
                settings
              </button>
            </div>
          </div>
        );
      });
      setSites(mappedsites);
    };
    getSites();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className={isMobile ? "mobilePage" : "page"}>
      <Helmet>
        <title>Siteside | {loggedIn.userName}</title>
      </Helmet>
      <NavBar />
      <div id="UserPage" className="page col">
        {spinning ? (
          <Spinner />
        ) : (
          <main className={isMobile ? "col" : "row"}>
            <div id="userProfile" className="col alignCenter">
              <div id="profilePicture">
                <img alt="rwq" src={loggedIn.profilePic} />
              </div>
              <h3>{loggedIn.userName}</h3>
              <div className="sprade">
                <button
                  onClick={async () => {
                    await logOut();
                    window.location.reload(false);
                    return navigate("/");
                  }}
                  className="badBtn"
                >
                  log out
                </button>
              </div>
            </div>{" "}
            <div id="userSiteList">
              {sites}
              <div className="siteS">
                <Link to="/newsite">
                  <img id="plus" src={plus} alt="asdf" />
                  <p>new site</p>
                </Link>
              </div>
            </div>
          </main>
        )}
      </div>
      <BackGround />
    </div>
  );
};
export default UserPage;
