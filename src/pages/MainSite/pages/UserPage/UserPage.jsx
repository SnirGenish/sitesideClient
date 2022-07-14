import "./UserPage.css";
import NavBar from "../../components/NavBar/NavBar";
import BackGround from "../../components/BackGround/BackGround";
import { isMobile } from "react-device-detect";
import plus from "../../../../assets/plus.svg";
import { Link, useNavigate } from "react-router-dom";
import { getUser, logOut } from "../../../../api/userApi";
import { useEffect, useState } from "react";
const UserPage = () => {
  const [sites, setSites] = useState([]);
  const navigate = useNavigate();
  const loggedIn = JSON.parse(localStorage.getItem("userData"));
  useEffect(() => {
    const getSites = async () => {
      const user = await getUser();
      const mappedsites = await user.sites.map((site) => {
        return (
          <Link
            to={`/${loggedIn.userName}/${site.title}/home`}
            className="siteS"
          >
            <div className="siteLogo">
              {site.logo.isText ? (
                <div className="siteLogoText">{site.logo.text}</div>
              ) : (
                <img src={site.logo.url} alt="logo" />
              )}
            </div>
            <div>
              <div className="siteName">{site.title}</div>
              <button className="settingBtn">
                <Link to="/"> settings</Link>
              </button>
            </div>
          </Link>
        );
      });
      setSites(mappedsites);
    };
    getSites();
  }, []);
  return (
    <div className={isMobile ? "mobilePage" : "page"}>
      <NavBar />
      <div id="UserPage" className="page col">
        <main className={isMobile ? "col" : "row"}>
          <div id="userProfile" className="col alignCenter">
            <div id="profilePicture">
              <img alt="rwq" src={loggedIn.profilePic} />
            </div>
            <h3>{loggedIn.userName}</h3>
            <div className="sprade">
              <button className="settingBtn">settings</button>
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
          </div>
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
      </div>
      <BackGround />
    </div>
  );
};
export default UserPage;
