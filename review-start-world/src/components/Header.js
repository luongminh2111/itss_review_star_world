import React, { useState } from "react";
import "../styles/Header.css";
import logo from "../assets/image1.png";
import { SiCounterstrike } from "react-icons/si";
import { VscSearch } from "react-icons/vsc";
import { useHistory } from "react-router-dom";

function Header(props) {
  const history = useHistory();
  return (
    <div className="header">
      <div className="container">
        <div className="row">
          <div className="col-4  left-content">
            <div className="item1">
              <a>
                <img className="logo" src={logo}></img>
              </a>
            </div>
            <div className="item2">
              <nav>
                <span className="icon">
                  <SiCounterstrike color="white" />
                </span>
                <span className="text-white header-text">
                  Browse Categories
                </span>
              </nav>
            </div>
          </div>
          <div className="col-4  center-content">
            <div className="search">
              <span className="icon-search">
                <VscSearch />
              </span>
              <input
                className="input"
                placeholder="Search for products, brands, services etc"
              ></input>
            </div>
          </div>
          <div className="col-4  right-content">
            <div
              className="signin "
              style={{ marginTop: "15px", fontWeight: "600" }}
              onClick={() => {
                history.push("/login");
              }}
            >
              Login
            </div>
            <div className="signup">
              <button
                onClick={() => {
                  history.push("/register");
                }}
              >
                Free Sign Up
              </button>
            </div>
            <div className="button-write">
              <button
                onClick={() => {
                  history.push("/review/writereview");
                }}
              >
                Write a Review
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
