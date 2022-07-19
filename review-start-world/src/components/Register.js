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

function Register(props) {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");

  const handleSignUp = () => {
    if (
      username.length === 0 ||
      password.length === 0 ||
      address.length === 0
    ) {
      window.confirm("Bạn cần điền đầy đủ thông tin");
    } else {
      let userItem = {
        username: username,
        password: password,
        address: address,
      };
      UserService.save(userItem).then((res) => {
        console.log("data user : ", res.data);
        if (res.status === 200) {
          window.confirm("Bạn đã đăng kí thành công, vui lòng đăng nhập");

          history.push("/login");
        } else {
          window.confirm("Đăng kí thất bại, vui lòng thử lại");
        }
      });
    }
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
            <input
              type="text"
              placeholder="住所"
              onChange={(e) => setAddress(e.target.value)}
            />
            <button onClick={() => handleSignUp()}>サインアップ</button>
          </div>
          <p
            style={{ marginTop: "15px", cursor: "pointer" }}
            onClick={() => {
              history.push("/login");
            }}
          >
            {" "}
            アカウントを持つ? ログイン
          </p>
        </div>
      </div>
    </>
  );
}

export default Register;
