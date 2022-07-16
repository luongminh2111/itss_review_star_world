import React, { useState } from "react";
import "../styles/Home.css";
import Header from "./Header";
import Footer from "./Footer";
function CreateReview(props) {
  return (
    <>
      <Header />
      <div id="writereviewpanel" style={{ marginTop: "20px" }}>
        <div className="container box-module">
          <div className="center-content">
            <div className="page-header"></div>
            <div className="container">
              <div className="left-panel col-7">
                <div className="w-r-panel">
                  <div id="pnRecommendation">
                    <div className="star-ratings">
                      <div>
                        <span>
                          Do you like this product?
                          <span>
                            <span>
                              <input type="radio"></input>
                              <label>Yes</label>
                            </span>
                            <span>
                              <input type="radio"></input>
                              <label>No</label>
                            </span>
                          </span>
                          <span></span>
                        </span>
                      </div>
                      <div className="pull-left">
                        <span>Star Rating</span>
                        <span></span>
                      </div>
                    </div>
                  </div>
                  <span className="field-outline">
                    <input
                      type="text"
                      maxLength={50}
                      autoComplete="off"
                      placeholder="Your review title will attract readers, so be creative."
                    ></input>
                  </span>
                  <div className="field-outline">
                    <textarea
                      autoComplete="off"
                      placeholder="Write your review about the product."
                      maxLength={20000}
                      style={{ overflow: "hidden", height: "200px" }}
                    ></textarea>
                    <div className="textarea-footer"></div>
                  </div>
                  <div>
                    <button>Submit Review</button>
                  </div>
                </div>
              </div>
              <div className="col-5">
                <div className="img">
                  <img src="https://image3.mouthshut.com/images/imagesp/925006622s.gif"></img>
                </div>
                <div className="content">Review Guidelines</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default CreateReview;
