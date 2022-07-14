import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import UserNav from "../UserNav/UserNav";
import "./NavBar.css";
import { isMobile } from "react-device-detect";
import { Sling as Hamburger } from "hamburger-react";
import { useState } from "react";
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  if (isMobile) {
    return (
      <nav id="NavBarMobile" className="row spaceBetween fixed">
        <Link to="/" id="NavBarLogoMobile">
          <Logo isFull={false} />
        </Link>
        <Hamburger
          onToggle={() => (isOpen ? setIsOpen(false) : setIsOpen(true))}
        />
        <div
          id="mobileNavSlide"
          style={{
            height: window.innerHeight,
            width: window.innerWidth,
          }}
          className={isOpen ? "absolute block" : "absolute"}
        >
          <div
            id="mobileNavSlideInner"
            className={isOpen ? null : "mobileNavSlide"}
          >
            <UserNav />
            <div id="NavBarMenuMobile">
              <ul className="col">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/About">About</Link>
                </li>
                <li>
                  <Link to="/ContectUs">Contect Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  } else {
    return (
      <nav id="NavBar" className="row">
        <Link to="/" id="NavBarLogo">
          <Logo isFull={false} />
        </Link>
        <div id="NavBarMenu">
          <ul className="row">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/ContectUs">Contect Us</Link>
            </li>
          </ul>
        </div>
        <div id="userNav">
          <UserNav />
        </div>
      </nav>
    );
  }
};
export default NavBar;
