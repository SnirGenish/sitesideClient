import BackGround from "../../components/BackGround/BackGround";
import "./SignUp.css";
import { isMobile } from "react-device-detect";
import Logo from "../../components/Logo/Logo";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
const SignUp = () => {
  const [isFull, setIsFull] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [name, setName] = useState("");
  useEffect(() => {
    if (email.length && password.length && password2.length && name.length) {
      setIsFull(true);
    }
    if (
      !email.length ||
      !password.length ||
      !password2.length ||
      !name.length
    ) {
      setIsFull(false);
    }
  }, [email, password, password2, name]);
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
            <form action="SignUp" className="col sprade justifyCenter">
              <input
                type="text"
                placeholder="username"
                id="username"
                name="username"
                value={name}
                onChange={(e) => setName(e.target.value)}
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
              <button className={isFull ? "submitBtnFull" : "submitBtn"}>
                Sign Up{" "}
              </button>
              <p>
                already on Siteside? <Link to="/logIn">Log In</Link>
              </p>
            </form>
          </div>
        </main>
      </div>
      <BackGround />
    </div>
  );
};
export default SignUp;
