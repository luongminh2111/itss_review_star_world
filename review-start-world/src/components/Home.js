import React, { useEffect, useState } from "react";
import "../styles/Home.css";
import { FaPencilAlt } from "react-icons/fa";
import "../styles/Card.css";
import Header from "./Header";
import Footer from "./Footer";
import { useHistory } from "react-router-dom";
import Card from "../components/Card.js";
function Home(props) {
  const history = useHistory();

  return (
    <>
      <Header />
      <div className="main">
        <div className="container">
          <div className="breadcrumb">
            <p>
              <a href="">Home</a>
              <a href="">> Movies Music and Sitcom</a>
              <a href="">> TV - Cable Channels</a>
              <a href="">> Star World</a>
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
                <button
                  onClick={() => {
                    history.push("/review/writereview");
                  }}
                >
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
          <h5 className="" style={{ color: "#6faa41" }}>
            {" "}
            Reviews
          </h5>
          <hr />
          <div className="customer-body">
            <div className="wrapper">
              <div className="left-panel">
                <h2> Star World Reviews</h2>
                <Card />
              </div>
              <div className="sidebar"></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
