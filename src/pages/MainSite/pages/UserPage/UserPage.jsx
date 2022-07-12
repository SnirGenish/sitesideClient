import "./UserPage.css";
import NavBar from "../../components/NavBar/NavBar";
import BackGround from "../../components/BackGround/BackGround";
import { isMobile } from "react-device-detect";
import plus from "../../../../assets/plus.svg";

const UserPage = () => {
  return (
    <div className={isMobile ? "mobilePage" : "page"}>
      <NavBar />
      <div id="UserPage" className="page col">
        <main className={isMobile ? "col" : "row"}>
          <div id="userProfile" className="col alignCenter">
            <div id="profilePicture">
              <img
                alt="rwq"
                src="https://images.unsplash.com/flagged/photo-1573740144655-bbb6e88fb18a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
              />
            </div>
            <h3>user name</h3>
            <div className="sprade">
              <button className="settingBtn">user settings</button>
              <button className="badBtn">log out</button>
            </div>
          </div>
          <div id="userSiteList">
            <div className="siteS">
              <div className="siteLogo"></div>
              <div>
                <div className="siteName">site name</div>
                <button className="settingBtn">settings</button>
              </div>
            </div>
            <div className="siteS">
              <div className="siteLogo"></div>
              <div>
                <div className="siteName">site name</div>
                <button className="settingBtn">settings</button>
              </div>
            </div>
            <div className="siteS">
              <div>
                <img id="plus" src={plus} alt="asdf" />
                <p>new site</p>
              </div>
            </div>
          </div>
        </main>
      </div>
      <BackGround />
    </div>
  );
};
export default UserPage;
