import React, { Component } from "react";
import { getDatabase ,ref ,set} from "firebase/database";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../lib/firebase";

const auth = getAuth(app);

function writeUserData(userId, email, password, address) {
  const db = getDatabase();
  set(ref(db, 'users/' + userId), {
    email: email,
    password : password,
    address : address
  });
}

const register = () => {
  const auth = getAuth();
  const userId = auth.currentUser.uid;
  // Get all our input fields
  const email = document.getElementById('email').value
  console.log(email);
  const password = document.getElementById('password').value
  console.log(password);
  const address = document.getElementById('address').value
  console.log(address);

  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    writeUserData(userId, email, password, address);

    alert("Successfully created an account")
  })
  .catch((error) => {
    const errorCode = error.code;
    // const errorMessage = error.message;
    alert(errorCode);
  });
}

export default class Register extends Component {
  render() {
    return (
      <div
        className="auth-wapper"
        style={{ position: "absolute", top: "100px", left: "650px" }}
      >
        <div className="auth-inner">
          <div>
            <h3>Register</h3>

            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="First Name"
                id="firstname"
              ></input>
            </div>

            <div className="form-group">
              <label>Last Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Last Name"
                id="lastname"
              ></input>
            </div>

            <div className="form-group">
              <label>Address</label>
              <input
                type="text"
                className="form-control"
                placeholder="Address"
                id="address"
              ></input>
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                id="email"
              ></input>
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                id="password"
              ></input>
            </div>

            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                className="form-control"
                id="cfpass"
                placeholder="Confirm Password"
              ></input>
            </div>

            <button onClick={register} className="btn btn-primary btn-block">Sign Up</button>
          </div>
        </div>
      </div>
    );
  }
}
