import BackGround from "../../components/BackGround/BackGround";
import "./SignUp.css";
import { isMobile } from "react-device-detect";
import Logo from "../../components/Logo/Logo";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import {
  addUser,
  getUserByEmail,
  getUserByName,
} from "../../../../api/userApi";
import SmallSpinner from "../../components/SmallSpinner/SmallSpinner";
const SignUp = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [isFull, setIsFull] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [profilePic, setprofilePic] = useState("");
  const [userName, setuserName] = useState("");
  const [spinning, setSpinning] = useState(false);
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

  const errorCheck = async () => {
    setSpinning(true);
    if (
      !userName.length ||
      !profilePic.length ||
      !email.length ||
      !password.length
    ) {
      return setError("empty fields"), setSpinning(false);
    }
    if (password !== password2) {
      return setError("password not match"), setSpinning(false);
    }
    if (password.length < 6) {
      return setError("password must be 6 char"), setSpinning(false);
    }
    if (!email.includes("@")) {
      return setError("email not valid"), setSpinning(false);
    }
    const nameCahck = await getUserByName(userName);
    if (nameCahck) {
      return setError("user name already exist"), setSpinning(false);
    }
    const emailCahck = await getUserByEmail(email);
    if (emailCahck) {
      return setError("email already exist"), setSpinning(false);
    }

    await addUser({ email, password, userName, profilePic });
    window.location.reload(false);
    navigate("/");
    setSpinning(false);
  };
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
              <p className="errorInputMsg">{error}</p>
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
                placeholder="profile Picture URL"
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
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    errorCheck();
                  }
                }}
                onChange={(e) => setPassword2(e.target.value)}
              />
              <button
                onClick={errorCheck}
                className={
                  isFull
                    ? "submitBtnFull row justifyCenter alignCenter"
                    : "submitBtn"
                }
              >
                {spinning ? <SmallSpinner /> : "Sign Up"}
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
