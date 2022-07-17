import BackGround from "../../components/BackGround/BackGround";
import NavBar from "../../components/NavBar/NavBar";
import "./SiteSettings.css";
import { isMobile } from "react-device-detect";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { mappingColors } from "../../../../util/util";
import validator from "validator";
import { getSite, addSite, updateSite } from "../../../../api/siteApi";
import Spinner from "../../components/Spinner/Spinner";
import { Helmet } from "react-helmet";
const SiteSettings = () => {
  const userName = JSON.parse(localStorage.getItem("userData")).userName;
  const url = document.URL;
  const title = url.split("/")[4];
  const navigate = useNavigate();
  const [Email, setEmail] = useState("");
  const [isText, setIsText] = useState(false);
  const [logoText, setLogoText] = useState("");
  const [logoURL, setLogoURL] = useState("");
  const [font, setFont] = useState("caliberi");
  const [color, setColor] = useState("#000000");
  const [colorArray, setColorArray] = useState([]);
  const [HomePageHeadline, setHomePageHeadline] = useState("");
  const [HomePageSubHeadline, setHomePageSubHeadline] = useState("");
  const [HomePageText, setHomePageText] = useState("");
  const [HomePageImg, setHomePageImg] = useState("");
  const [buttonText, setButtonText] = useState("About");
  const [AboutPageHeadline, setAboutPageHeadline] = useState("");
  const [AboutPageText, setAboutPageText] = useState("");
  const [SocialLink1, setSocialLink1] = useState("");
  const [SocialLink2, setSocialLink2] = useState("");
  const [SocialLink3, setSocialLink3] = useState("");
  const [SocialLink4, setSocialLink4] = useState("");
  const [SocialLink5, setSocialLink5] = useState("");
  const [error, setError] = useState("");
  const [id, setId] = useState("");
  const [spinning, setSpinning] = useState(true);

  useEffect(() => {
    setColorArray(mappingColors(color));
  }, [color]);
  useEffect(() => {
    const getSiteData = async () => {
      const get = await getSite(title, userName);
      const data = await get.data;
      setEmail(data.Email);
      setFont(data.font);
      setColor(data.color[2]);
      setSocialLink1(data.Social.links[0] ? data.Social.links[0] : "");
      setSocialLink2(data.Social.links[1] ? data.Social.links[1] : "");
      setSocialLink3(data.Social.links[2] ? data.Social.links[2] : "");
      setSocialLink4(data.Social.links[3] ? data.Social.links[3] : "");
      setSocialLink5(data.Social.links[4] ? data.Social.links[4] : "");
      setAboutPageHeadline(data.aboutContent.title);
      setAboutPageText(data.aboutContent.text);
      setHomePageHeadline(data.homeContent.title);
      setHomePageSubHeadline(data.homeContent.subTitle);
      setHomePageText(data.homeContent.text);
      setHomePageImg(data.homeContent.imgUrl);
      setButtonText(data.homeContent.buttonLabel);
      setId(data._id);
      setLogoText(data.logo.text);
      setLogoURL(data.logo.url);
      setIsText(data.logo.isText);
      setSpinning(false);
    };
    getSiteData();
  }, []);
  const site = {
    title,
    Email,
    logo: {
      isText,
      text: logoText,
      url: logoURL,
    },
    homeContent: {
      title: HomePageHeadline,
      subTitle: HomePageSubHeadline,
      text: HomePageText,
      buttonLabel: buttonText,
      imgUrl: HomePageImg,
    },
    aboutContent: {
      title: AboutPageHeadline,
      text: AboutPageText,
    },
    Social: {
      links: [
        SocialLink1,
        SocialLink2,
        SocialLink3,
        SocialLink4,
        SocialLink5,
      ].filter((link) => link !== ""),
    },
    color: colorArray,
    font,
    _id: id,
  };
  const english = /^[A-Za-z0-9]*$/;
  console.log(buttonText);
  const errorHandler = async () => {
    if (
      !title.length ||
      !Email.length ||
      !HomePageHeadline.length ||
      !HomePageText.length ||
      !AboutPageHeadline.length ||
      !AboutPageText.length ||
      !(
        SocialLink1.length ||
        SocialLink2.length ||
        SocialLink3.length ||
        SocialLink4.length ||
        !SocialLink5.length
      )
    ) {
      return setError("Please fill all the fields");
    }
    if (!validator.isEmail(Email)) {
      return setError("Please enter a valid email");
    }
    if (!english.test(title)) {
      return setError("Please enter a valid title");
    }
    if (!isText && !validator.isURL(logoURL)) {
      return setError("Please enter a valid url");
    }
    if (!validator.isURL(HomePageImg)) {
      return setError("Please enter a valid url");
    }

    submit();
  };
  const submit = async () => {
    await updateSite(site);
    // navigate("/");
  };
  if (spinning) {
    return <Spinner />;
  } else {
    return (
      <div className={isMobile ? "mobilePage" : "page"}>
        <Helmet>
          <title>Siteside | {title}</title>
        </Helmet>
        <div id="NewSite" className="page col">
          <NavBar />
          <main className="col alignCenter sprade">
            <div id="newSiteForm">
              <h1>Site Settings</h1>
              <p className="errorInputMsg">{error}</p>
              <h4>Email</h4>
              <p></p>

              <input
                type="text"
                placeholder="Email"
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <h4>Logo</h4>
              <p></p>
              <div className="switch">
                <div
                  className={
                    isText ? "switchOff switchOption" : "switchOn switchOption"
                  }
                  onClick={() => setIsText(false)}
                >
                  image
                </div>
                <div
                  className={
                    !isText ? "switchOff switchOption" : "switchOn switchOption"
                  }
                  onClick={() => setIsText(true)}
                >
                  text
                </div>
              </div>
              <input
                type="text"
                placeholder={isText ? "Logo text" : "Logo URL"}
                value={isText ? logoText : logoURL}
                onChange={(e) =>
                  isText
                    ? setLogoText(e.target.value)
                    : setLogoURL(e.target.value)
                }
              />
              <h4>Style</h4>
              <div className="styleCont col">
                <div className="row box1">
                  <div
                    className="colorBox"
                    style={{ backgroundColor: colorArray[0] }}
                  ></div>
                  <div
                    className="colorBox"
                    style={{ backgroundColor: colorArray[1] }}
                  ></div>
                  <div
                    className="colorBox"
                    style={{ backgroundColor: colorArray[2] }}
                  ></div>
                  <div
                    className="colorBox"
                    style={{ backgroundColor: colorArray[3] }}
                  ></div>
                  <div
                    className="colorBox"
                    style={{ backgroundColor: colorArray[4] }}
                  ></div>
                  <div
                    className="colorBox"
                    style={{ backgroundColor: colorArray[5] }}
                  ></div>
                  <div
                    className="colorBox"
                    style={{ backgroundColor: colorArray[6] }}
                  ></div>
                </div>
                <div className="row box">
                  <input
                    type="color"
                    name=""
                    id=""
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                  />{" "}
                  <select
                    name="select font"
                    id=""
                    style={{ fontFamily: font }}
                    value={font}
                    onChange={(e) => setFont(e.target.value)}
                  >
                    <option style={{ fontFamily: "caliberi" }} value="caliberi">
                      caliberi
                    </option>
                    <option style={{ fontFamily: "Arial" }} value="Arial">
                      Arial
                    </option>
                    <option
                      style={{ fontFamily: "Helvetica" }}
                      value="Helvetica"
                    >
                      Helvetica
                    </option>
                    <option
                      style={{ fontFamily: "Times New Roman" }}
                      value="Times New Roman"
                    >
                      Times New Roman
                    </option>
                    <option style={{ fontFamily: "Georgia" }} value="Georgia">
                      Georgia
                    </option>
                    <option style={{ fontFamily: "Verdana" }} value="Verdana">
                      Verdana
                    </option>
                    <option style={{ fontFamily: "Tahoma" }} value="Tahoma">
                      Tahoma
                    </option>
                    <option style={{ fontFamily: "Palatino" }} value="Palatino">
                      Palatino
                    </option>
                    <option style={{ fontFamily: "Garamond" }} value="Garamond">
                      Garamond
                    </option>
                    <option style={{ fontFamily: "Bookman" }} value="Bookman">
                      Bookman
                    </option>
                  </select>
                </div>
              </div>
              <h4>Home Page</h4>
              <p></p>

              <input
                type="text"
                placeholder="Headline"
                value={HomePageHeadline}
                onChange={(e) => setHomePageHeadline(e.target.value)}
              />
              <input
                type="text"
                placeholder="Sub headline"
                value={HomePageSubHeadline}
                onChange={(e) => setHomePageSubHeadline(e.target.value)}
              />
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="text"
                value={HomePageText}
                onChange={(e) => setHomePageText(e.target.value)}
              ></textarea>
              <h4>Image</h4>
              <p></p>
              <input
                type="text"
                placeholder="Image URL"
                value={HomePageImg}
                onChange={(e) => setHomePageImg(e.target.value)}
              />
              <h4>button</h4>

              <div className="switch">
                <div
                  className={
                    buttonText !== "About"
                      ? "switchOff switchOption"
                      : "switchOn switchOption"
                  }
                  onClick={() => setButtonText("About")}
                >
                  About
                </div>
                <div
                  className={
                    buttonText !== "Contact Us"
                      ? "switchOff switchOption"
                      : "switchOn switchOption"
                  }
                  onClick={() => setButtonText("Contact Us")}
                >
                  Contact Us
                </div>
              </div>
              <h4>About Page</h4>
              <p></p>
              <input
                type="text"
                placeholder="Headline"
                value={AboutPageHeadline}
                onChange={(e) => setAboutPageHeadline(e.target.value)}
              />
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="text"
                value={AboutPageText}
                onChange={(e) => setAboutPageText(e.target.value)}
              ></textarea>
              <h4>Social Links</h4>
              <p></p>
              <input
                type="text"
                placeholder="Link"
                value={SocialLink1}
                onChange={(e) => setSocialLink1(e.target.value)}
              />
              <input
                type="text"
                placeholder="Link"
                value={SocialLink2}
                onChange={(e) => setSocialLink2(e.target.value)}
              />
              <input
                type="text"
                placeholder="Link"
                value={SocialLink3}
                onChange={(e) => setSocialLink3(e.target.value)}
              />
              <input
                type="text"
                placeholder="Link"
                value={SocialLink4}
                onChange={(e) => setSocialLink4(e.target.value)}
              />
              <input
                type="text"
                placeholder="Link"
                value={SocialLink5}
                onChange={(e) => setSocialLink5(e.target.value)}
              />
              <button onClick={errorHandler} className="createBtn">
                Update my site
              </button>
            </div>
          </main>
        </div>
        <BackGround />
      </div>
    );
  }
};

export default SiteSettings;
