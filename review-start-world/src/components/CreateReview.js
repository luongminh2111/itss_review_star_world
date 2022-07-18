import React, { useState } from "react";
import "../styles/Home.css";
import Header from "./Header";
import Footer from "./Footer";
import { AiFillStar } from "react-icons/ai";
import ReviewService from "../services/ReviewService";
import { useHistory } from "react-router-dom";
function CreateReview() {
  const history = useHistory();
  const [rate, setRate] = useState(0);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState(0);
  const [color1, setColor1] = useState("#b4bfbf");
  const [color2, setColor2] = useState("#b4bfbf");
  const [color3, setColor3] = useState("#b4bfbf");
  const [color4, setColor4] = useState("#b4bfbf");
  const [color5, setColor5] = useState("#b4bfbf");
  const [onCheckNo, setOnCheckNo] = useState(false);
  const [onCheckYes, setOnCheckYes] = useState(false);
  const handleChangeRate = (value) => {
    setRate(value);
    if (value === 1) {
      setColor1("orange");
      setColor4("#b4bfbf");
      setColor5("#b4bfbf");
      setColor2("#b4bfbf");
      setColor3("#b4bfbf");
    } else if (value === 2) {
      setColor1("orange");
      setColor2("orange");
      setColor4("#b4bfbf");
      setColor5("#b4bfbf");
      setColor3("#b4bfbf");
    } else if (value === 3) {
      setColor1("orange");
      setColor2("orange");
      setColor3("orange");
      setColor4("#b4bfbf");
      setColor5("#b4bfbf");
    } else if (value === 4) {
      setColor4("orange");
      setColor1("orange");
      setColor2("orange");
      setColor3("orange");
      setColor5("#b4bfbf");
    } else {
      setColor1("orange");
      setColor2("orange");
      setColor3("orange");
      setColor4("orange");
      setColor5("orange");
    }
  };

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };
  const handleChangeContent = (event) => {
    setContent(event.target.value);
  };
  const saveReview = () => {
    let item = {
      userId: 1,
      title: title,
      rate: rate,
      content: content,
      createdBy: "minh",
      createdDate: new Date(),
    };
    ReviewService.save(item).then((res) => {
      if (res.status === 200) {
        history.push("/");
      }
    });
  };
  return (
    <>
      <Header />
      <div
        id="writereviewpanel"
        style={{ marginTop: "20px", backgroundColor: "#fafafa" }}
      >
        <div
          className="container box-module"
          style={{ backgroundColor: "white", border: "0.5px solid #e5e5e5" }}
        >
          <div
            className="center-content"
            style={{ width: "80%", margin: "20px auto" }}
          >
            <div
              className="page-header"
              style={{
                boxSizing: "border-box",
                paddingLeft: "10px",
                marginBottom: "20px",
              }}
            >
              <h1 style={{ fontSize: "28px" }}>
                Write Review on{" "}
                <a style={{ color: "#71a712", fontSize: "24px" }}>Star World</a>
              </h1>
            </div>
            <div
              className="container"
              style={{ display: "inline-flex", flexWrap: "nowrap" }}
            >
              <div
                className="left-panel col-7"
                style={{
                  border: "0.8px solid #e5e5e5",
                  borderRadius: "5px",
                  backgroundColor: "#fafafa",
                  boxSizing: "border-box",
                  padding: "15px 30px",
                  marginRight: "15px",
                }}
              >
                <div className="w-r-panel">
                  <div id="pnRecommendation">
                    <div className="star-ratings">
                      <div style={{ margin: "10px auto" }}>
                        <span>
                          Do you like this product?
                          <span style={{ margin: "0 30px" }}>
                            <span style={{ marginRight: "20px" }}>
                              <input
                                onClick={() => {
                                  handleChangeRate(3);
                                  setOnCheckYes(false);
                                  setOnCheckNo(true);
                                }}
                                type="radio"
                                checked={onCheckNo}
                                unchecked={onCheckYes}
                                style={{ marginRight: "8px" }}
                              ></input>
                              <label>Yes</label>
                            </span>
                            <span>
                              <input
                                unchecked={onCheckNo}
                                checked={onCheckYes}
                                onClick={() => {
                                  handleChangeRate(1);
                                  setOnCheckNo(false);
                                  setOnCheckYes(true);
                                }}
                                type="radio"
                                style={{ marginRight: "8px" }}
                              ></input>
                              <label>No</label>
                            </span>
                          </span>
                        </span>
                      </div>
                      <div
                        className="pull-left"
                        style={{ margin: "10px auto" }}
                      >
                        <span style={{ marginRight: "50px" }}>Star Rating</span>
                        <span>
                          <i>
                            <AiFillStar
                              color={color1}
                              fontSize="24px"
                              onClick={() => {
                                handleChangeRate(1);
                              }}
                            />
                          </i>
                          <i>
                            <AiFillStar
                              color={color2}
                              fontSize="24px"
                              onClick={() => {
                                handleChangeRate(2);
                              }}
                            />
                          </i>
                          <i>
                            <AiFillStar
                              color={color3}
                              fontSize="24px"
                              onClick={() => {
                                handleChangeRate(3);
                              }}
                            />
                          </i>
                          <i>
                            <AiFillStar
                              color={color4}
                              fontSize="24px"
                              onClick={() => {
                                handleChangeRate(4);
                              }}
                            />
                          </i>
                          <i>
                            <AiFillStar
                              color={color5}
                              fontSize="24px"
                              onClick={() => {
                                handleChangeRate(5);
                              }}
                            />
                          </i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <span className="field-outline" style={{ width: "100%" }}>
                    <input
                      style={{
                        width: "100%",
                        outline: "none",
                        border: "1px solid #e5e5e5",
                        height: "40px",
                        boxSizing: "border-box",
                        padding: "5px 15px",
                        marginBottom: "20px",
                      }}
                      onChange={(event) => {
                        handleChangeTitle(event);
                      }}
                      type="text"
                      maxLength={50}
                      autoComplete="off"
                      placeholder="Your review title will attract readers, so be creative."
                    ></input>
                  </span>
                  <div className="field-outline">
                    <textarea
                      style={{
                        width: "100%",
                        outline: "none",
                        border: "1px solid #e5e5e5",
                        height: "200px",
                        boxSizing: "border-box",
                        padding: "5px 15px",
                        marginBottom: "20px",
                        overflow: "hidden",
                      }}
                      onChange={(event) => {
                        handleChangeContent(event);
                      }}
                      autoComplete="off"
                      placeholder="Write your review about the product."
                      maxLength={20000}
                    ></textarea>
                    <div className="textarea-footer"></div>
                  </div>
                  <div>
                    <button
                      style={{
                        border: "none",
                        borderRadius: "5px",
                        backgroundColor: "#ff5a5f",
                        color: "white",
                        width: "150px",
                        height: "40px",
                      }}
                      onClick={() => {
                        saveReview();
                      }}
                    >
                      Submit Review
                    </button>
                  </div>
                </div>
              </div>
              <div
                className="col-5"
                style={{
                  marginLeft: "15px",

                  width: "30%",
                }}
              >
                <div
                  className="img"
                  style={{
                    border: "0.8px solid #e5e5e5",
                    height: "250px",
                    width: "100%",
                    position: "relative",
                  }}
                >
                  <img
                    src="https://image3.mouthshut.com/images/imagesp/925006622s.gif"
                    style={{
                      position: "absolute",
                      top: "110px",
                      left: "120px",
                    }}
                  ></img>
                </div>
                <div
                  className="content"
                  style={{
                    marginTop: "30px",
                    width: "100%",
                    height: "50px",
                    border: "1px solid #e5e5e5",
                    boxSizing: "border-box",
                    padding: "10px 15px",
                  }}
                >
                  Review Guidelines
                </div>
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
