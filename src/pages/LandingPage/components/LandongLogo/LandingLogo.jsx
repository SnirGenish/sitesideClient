import "./LandingLogo.css";
const LandingLogo = ({ LogoData, colorData }) => {
  if (LogoData.isText) {
    return (
      <div id="LandingLogo">
        <h1 style={{ color: colorData[2] }} id="LandingLogoText">
          {LogoData.text}
        </h1>
      </div>
    );
  } else {
    return (
      <div id="LandingLogo">
        <img src={LogoData.url} alt="logo" />
      </div>
    );
  }
};
export default LandingLogo;
