import React, { Component } from "react";

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
              ></input>
            </div>

            <div className="form-group">
              <label>Last Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Last Name"
              ></input>
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Email"
              ></input>
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
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

            <button className="btn btn-primary btn-block">Sign Up</button>
          </form>
        </div>
      </div>
    );
  }
}
