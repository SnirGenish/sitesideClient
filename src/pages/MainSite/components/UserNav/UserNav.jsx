import "./UserNav.css";
import { Link } from "react-router-dom";
const UserNav = () => {
  const loggedIn = JSON.parse(localStorage.getItem("userData"));

  if (!loggedIn) {
    return (
      <div id="UserNav">
        <ul className="row">
          <li>
            <Link to="/logIn">log in</Link>
          </li>
          <li>
            <Link to="/signUp">sign up</Link>
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <Link to="user" className="row" id="UserNavLogged">
        <div id="navProfilePicture">
          <img src={loggedIn.profilePic} alt="profile" />
        </div>
        <div id="navProfileInfo">
          <p>{loggedIn.userName}</p>
        </div>
      </Link>
    );
  }
};
export default UserNav;
