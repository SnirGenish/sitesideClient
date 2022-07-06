import "./NavLanding.css";
import LandingLogo from "../LandongLogo/LandingLogo";
import NavLandingSocial from "../LandingSocial/LandingSocial";
const NavLanding = (props) => {
  return (
    <nav
      style={{ backgroundColor: props.colorsData[4] }}
      className="row spaceBetween alignCenter"
      id="NavLanding"
    >
      <LandingLogo LogoData={props.LogoData} colorData={props.colorsData} />
      <ul
        style={{ color: props.colorsData[0] }}
        id="NavLandingUl"
        className="row"
      >
        <li>About</li>
        <li>Contect us</li>
      </ul>
      <NavLandingSocial
        colorsData={props.colorsData}
        socialData={props.socialData}
      />
    </nav>
  );
};
export default NavLanding;
