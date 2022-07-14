import BackGround from "../../components/BackGround/BackGround";
import "./SignUp.css";
import { isMobile } from "react-device-detect";
import Logo from "../../components/Logo/Logo";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { addUser } from "../../../../api/userApi";
const SignUp = () => {
  const navigate = useNavigate();

  const [isFull, setIsFull] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [profilePic, setprofilePic] = useState("");
  const [userName, setuserName] = useState("");
  useEffect(() => {
    if (
      email.length &&
      password.length &&
      password2.length &&
      userName.length
    ) {
      setIsFull(true);
    }
    if (
      !email.length ||
      !password.length ||
      !password2.length ||
      !userName.length
    ) {
      setIsFull(false);
    }
  }, [email, password, password2, userName]);
  return (
    <div className="page">
      <div id="SignUp" className="page  column">
        <main
          style={{ height: "100vh" }}
          className="col sprade  alignCenter justifyCenter mainMain"
        >
          <div
            id="SignUpForm"
            className="col alignCenter"
            style={{
              width: isMobile ? "100%" : null,
              height: isMobile ? "100%" : null,
            }}
          >
            <Link className="tWidth" to="/">
              <Logo isFull={true} />
            </Link>
            <div action="SignUp" className="col sprade justifyCenter">
              <input
                type="text"
                placeholder="user name"
                id="username"
                name="username"
                value={userName}
                onChange={(e) => setuserName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Email"
                id="Email"
                name="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="text"
                placeholder="profilePic Picture"
                id="profilePic"
                name="profilePic"
                value={profilePic}
                onChange={(e) => setprofilePic(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password again"
                id="password"
                name="password"
                value={password2}
                onChange={(e) => setPassword2(e.target.value)}
              />
              <button
                onClick={async () => {
                  if (password === password2) {
                    await addUser({ email, password, userName, profilePic });
                    navigate("/");
                  }
                }}
                className={isFull ? "submitBtnFull" : "submitBtn"}
              >
                Sign Up{" "}
              </button>
              <p>
                already on Siteside? <Link to="/logIn">Log In</Link>
              </p>
            </div>
          </div>
        </main>
      </div>
      <BackGround />
    </div>
  );
};
export default SignUp;
