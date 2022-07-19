import React, { useState } from "react";
import "../styles/Login.css";

import app from "../lib/firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useHistory } from "react-router-dom";
import UserService from "../services/UserService";

function Login(props) {
  const auth = getAuth(app);
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    UserService.getByUsernameAndPassword(username, password).then((res) => {
      console.log("data user : ", res.data);
      if (res.data.username != null) {
        localStorage.setItem("username", res.data.username);
        localStorage.setItem("address", res.data.address);
        localStorage.setItem("password", res.data.password);
        localStorage.setItem("id", res.data.id);
        history.push("/");
      } else {
        window.confirm("Tài khoản chưa tồn tại, vui lòng đăng kí");
      }
    });
  };
  return (
    <>
      <div className="login-page">
        <div className="form">
          <div className="login-form">
            <input
              type="text"
              placeholder="ユーザー名"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="パスワード"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={() => handleLogin()}>ログイン</button>
          </div>
          <p
            style={{ marginTop: "20px", cursor: "pointer" }}
            onClick={() => {
              history.push("/register");
            }}
          >
            サインアップ
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
