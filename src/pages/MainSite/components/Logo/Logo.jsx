import logo from "../../../../assets/logo.svg";
import smallLogo from "../../../../assets/smallLogo.svg";
const Logo = ({ isFull }) => {
  if (isFull) {
    return <img src={logo} alt="logo" />;
  } else {
    return <img src={smallLogo} alt="logo" />;
  }
};
export default Logo;
