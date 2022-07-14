import BackGround from "../../components/BackGround/BackGround";
import "./LogIn.css";
import { isMobile } from "react-device-detect";
import Logo from "../../components/Logo/Logo";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { logIn } from "../../../../api/userApi";
const LogIn = () => {
  const [isFull, setIsFull] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

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
              <button
                onClick={async () => {
                  await logIn(email, password).then((res) => {
                    if (res) {
                      window.location.reload(false);
                      navigate("/");
                    } else {
                      alert("Wrong email or password");
                    }
                  });
                }}
                className={isFull ? "submitBtnFull" : "submitBtn"}
              >
                Log In
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
