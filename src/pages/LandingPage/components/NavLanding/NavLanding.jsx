import "./NavLanding.css";
import LandingLogo from "../LandongLogo/LandingLogo";
import NavLandingSocial from "../LandingSocial/LandingSocial";
import { Link } from "react-router-dom";
const NavLanding = ({ data }) => {
  return (
    <nav
      style={{ backgroundColor: data.color[4] }}
      className="row spaceBetween alignCenter"
      id="NavLanding"
    >
      <LandingLogo LogoData={data.logo} colorData={data.color} />
      <ul style={{ color: data.color[0] }} id="NavLandingUl" className="row">
        <Link to={`/${data.siteInfo.userName}/${data.siteInfo.title}/about`}>
          <li>About</li>
        </Link>
        <Link
          to={`/${data.siteInfo.userName}/${data.siteInfo.title}/contectUs`}
        >
          <li>Contect us</li>
        </Link>
      </ul>
      <div className="cont">
        <NavLandingSocial colorsData={data.color} socialData={data.Social} />
      </div>
    </nav>
  );
};
export default NavLanding;
