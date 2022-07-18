import React, { Component } from "react";
import register from "../lib/firebase";

export default class Register extends Component {
  render() {
    return (
      <div className="auth-wapper">
        <div className="auth-inner">
          <form>
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
                placeholder="Confirm Password"
              ></input>
            </div>

            <button onClick={register} className="btn btn-primary btn-block">Sign Up</button>
          </form>
        </div>
      </div>
    );
  }
}
