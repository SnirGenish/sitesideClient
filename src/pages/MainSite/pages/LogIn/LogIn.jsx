import BackGround from "../../components/BackGround/BackGround";
import "./LogIn.css";
import { isMobile } from "react-device-detect";
import Logo from "../../components/Logo/Logo";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { logIn } from "../../../../api/userApi";
import SmallSpinner from "../../components/SmallSpinner/SmallSpinner";
const LogIn = () => {
  const [isFull, setIsFull] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [spinning, setSpinning] = useState(false);
  const navigate = useNavigate();

  const submitting = async () => {
    if (isFull) {
      setSpinning(true);
      await logIn(email, password).then((res) => {
        if (res) {
          window.location.reload(false);
          navigate("/");
        } else {
          setError(true);
        }
      });
      setSpinning(false);
    }
  };

  useEffect(() => {
    if (email.length && password.length) {
      setIsFull(true);
    }
    if (!email.length || !password.length) {
      setIsFull(false);
    }
  }, [email, password]);
  return (
    <div className="page">
      <div id="LogIn" className="page  column">
        <main
          style={{ height: isMobile ? "100vh" : window.innerHeight }}
          className="col sprade  alignCenter justifyCenter mainMain"
        >
          <div
            id="LogInForm"
            className="col alignCenter"
            style={{
              width: isMobile ? "100%" : null,
              height: isMobile ? "100%" : null,
            }}
          >
            <Link className="tWidth" to="/">
              <Logo isFull={true} />
            </Link>
            <div action="login" className="col sprade justifyCenter">
              <p
                style={{ visibility: error ? "visible" : "hidden" }}
                className="errorInputMsg"
              >
                Wrong email or password
              </p>
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
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    submitting();
                  }
                }}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                onClick={submitting}
                className={
                  isFull
                    ? "submitBtnFull row justifyCenter alignCenter"
                    : "submitBtn"
                }
              >
                {spinning ? <SmallSpinner /> : "log in"}
              </button>
              <p>
                not on Siteside yet? <Link to="/signUp">sign up</Link>
              </p>
            </div>
          </div>
        </main>
      </div>
      <BackGround />
    </div>
  );
};
export default LogIn;
