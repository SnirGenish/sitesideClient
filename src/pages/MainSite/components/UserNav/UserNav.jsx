import { Link } from "react-router-dom";
const UserNav = ({ isLoged }) => {
  if (!isLoged) {
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
    return <div id="UserNav"></div>;
  }
};
export default UserNav;
