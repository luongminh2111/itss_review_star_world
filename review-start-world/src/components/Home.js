import React, { useState } from "react";
import "../styles/Home.css";
import logo from "../assets/image1.png";
import { SiCounterstrike } from "react-icons/si";
import { VscSearch } from "react-icons/vsc";
import { FaPencilAlt } from "react-icons/fa";
import Content from "./Content";

function Home(props) {
  return (
    <>
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
              <div className="signin ">Login</div>
              <div className="signup">
                <button>Free Sign Up</button>
              </div>
              <div className="button-write">
                <button>Write a Review</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main">
        <div className="container">
          <div className="breadcrumb">
            <p>
              <a href="">Home</a> > <a href="">Movies Music and Sitcom</a> >
              <a href="">Movies Music and Sitcom</a> > Star World
            </p>
          </div>
          <div className="table">
            <h1 id="prodTitle1" className="">
              <a href="https://www.mouthshut.com/product-reviews/Star-World-reviews-925006622">
                Star World
              </a>
            </h1>
            <span>
              <button>Follow</button>
              <button>Share</button>
            </span>
          </div>
          <div className="row">
            <div className="col-4">
              <div className="product-image">
                <a>
                  <img
                    src="https://image3.mouthshut.com/images/imagesp/925006622s.gif"
                    alt="Star World Image"
                  ></img>
                </a>
              </div>
              <div className="product-info">
                <button>
                  <span>
                    <FaPencilAlt />
                  </span>
                  Write Your Review
                </button>
              </div>
            </div>
            <div className="col-8">
              <div className="product-detail">
                <div className="hightlight-head">
                  <h2 className="pull-left">MouthShut Score</h2>
                  <div className="pull-right">
                    <span>264 Followers</span>
                    <div className="selectbox-container analyse-dropdown">
                      <button>Year-wise Rating</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="module"></div>
              <div className="text-right"></div>
            </div>
          </div>
          <hr style={{ marginTop: "20px" }} />
          <h5 className=""> Review</h5>
          <hr />
          <div className="customer-body">
            <div className="wrapper">
              <div className="pull-left">
                <h2> Star World Reviews</h2>
              </div>
              <div className="pull-right"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer"></div>
    </>
  );
}

export default Home;
