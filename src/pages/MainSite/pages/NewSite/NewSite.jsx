import BackGround from "../../components/BackGround/BackGround";
import NavBar from "../../components/NavBar/NavBar";
import "./NewSite.css";
import { isMobile } from "react-device-detect";
import { useState } from "react";
import { mappingColors } from "../../../../util/util";
import { useEffect } from "react";
import { addSite, getSite } from "../../../../api/siteApi";
import { useNavigate } from "react-router-dom";
const NewSite = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
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

  useEffect(() => {
    setColorArray(mappingColors(color));
  }, [color]);

  const newSite = {
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
  };
  return (
    <div className={isMobile ? "mobilePage" : "page"}>
      <div id="NewSite" className="page col">
        <NavBar />
        <main className="col alignCenter sprade">
          <div id="newSiteForm">
            <h1>Create a new site</h1>
            <h4>title</h4>
            <p></p>
            <input
              type="text"
              placeholder="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
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
                  <option style={{ fontFamily: "Helvetica" }} value="Helvetica">
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
                  buttonText !== "Contect Us"
                    ? "switchOff switchOption"
                    : "switchOn switchOption"
                }
                onClick={() => setButtonText("Contect Us")}
              >
                Contect Us
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
            <button
              onClick={async () => {
                const check = await getSite(
                  title,
                  JSON.parse(localStorage.getItem("userData")).userName
                );
                console.log(check);
                if (check.status !== 200) {
                  await addSite(newSite).then((res) => {
                    console.log(res);
                    if (res.response) {
                      const errors = res.response.data.errors;
                      Object.entries(errors).map(([key, value]) => {
                        alert(value.message);
                      });
                    } else {
                      alert("Site added successfully");
                    }
                  });
                } else {
                  alert("Site already exists");
                }
              }}
              className="createBtn"
            >
              Create my site
            </button>
          </div>
        </main>
      </div>
      <BackGround />
    </div>
  );
};
export default NewSite;
