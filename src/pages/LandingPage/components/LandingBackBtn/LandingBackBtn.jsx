import { GoChevronRight } from "react-icons/go";
import "./LandingBackBtn.css";
import { Link } from "react-router-dom";
const LandingBackBtn = ({ data }) => {
  return (
    <div id="landingBackBtn">
      <Link to={`/${data.siteInfo.userName}/${data.siteInfo.title}/home`}>
        <GoChevronRight color={data.color[3]} />
      </Link>
    </div>
  );
};
export default LandingBackBtn;
