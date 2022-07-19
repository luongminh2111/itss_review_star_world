import React, { useState, useEffect } from "react";
import { AiOutlineShareAlt } from "react-icons/ai";

import { AiFillStar } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import { AiOutlineComment } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
import { FaReplyAll } from "react-icons/fa";
import "../styles/Card.css";
import ReviewService from "../services/ReviewService";
import CommentService from "../services/CommentService";

function Card() {
  const [cardList, setCardList] = useState([]);
  const [commentList, setCommentList] = useState([]);
  const [comment, setComment] = useState("");
  const [iro1, setIro1] = useState("orange");
  const [iro2, setIro2] = useState("orange");
  const [iro3, setIro3] = useState("orange");
  const [iro4, setIro4] = useState("#b4bfbf");
  const [iro5, setIro5] = useState("#b4bfbf");
  const [displayDiv, setDisplayDiv] = useState("none");
  useEffect(() => {
    getData();
    getComment();
  }, [comment]);
  const getData = () => {
    ReviewService.getAll().then((res) => {
      console.log("ok");
      setCardList(res.data);
    });
  };
  const getComment = () => {
    CommentService.getAll().then((res) => {
      setCommentList(res.data);
    });
  };
  const handleChangeHidenDiv = () => {
    displayDiv === "none" ? setDisplayDiv("block") : setDisplayDiv("none");
  };
  const saveComment = (reviewId) => {
    let item = {
      userId: 1,
      reviewId: reviewId,
      content: comment,
      createdDate: new Date(),
    };
    CommentService.save(item).then((res) => {
      if (res.status === 200) {
        console.log(" comment ok ");
        commentList.push(item);
      }
    });
  };
  const handleChangeIro = (value) => {
    if (value === 1) {
      setIro1("orange");
      setIro2("#b4bfbf");
      setIro3("#b4bfbf");
      setIro4("#b4bfbf");
      setIro5("#b4bfbf");
    } else if (value === 2) {
      setIro1("orange");
      setIro2("orange");
      setIro3("#b4bfbf");
      setIro4("#b4bfbf");
      setIro5("#b4bfbf");
    } else if (value === 3) {
      setIro1("orange");
      setIro2("orange");
      setIro3("orange");
      setIro4("#b4bfbf");
      setIro5("#b4bfbf");
    } else if (value === 4) {
      setIro1("orange");
      setIro2("orange");
      setIro3("orange");
      setIro4("orange");
      setIro5("#b4bfbf");
    } else {
      setIro1("orange");
      setIro2("orange");
      setIro3("orange");
      setIro4("orange");
      setIro5("orange");
    }
  };
  const handleChangeComment = (event) => {
    setComment(event.target.value);
  };
  return (
    <>
      {cardList.map((item) => (
        <div className=" review-article">
          <div className="row" style={{ height: "auto" }}>
            <div className="col-9" style={{ height: "auto" }}>
              <div className="row" style={{ height: "auto" }}>
                <div className="col-2 profile ">
                  <div className="profile-img">
                    <a href="" target={"_blank"}>
                      <img src="https://www.mouthshut.com/Images/COMMON/female-160X160.gif"></img>
                    </a>
                  </div>
                  <div className="profile-user">
                    <a href="">irfanayesha013</a>
                  </div>
                  <div className="profile-addr">India</div>
                  <div className="divider"></div>
                  <div className="profile-total-rev"> 2 reviews</div>
                </div>
                <div className="col-10 review-detail">
                  <strong>
                    <a href="" target={"_blank"}>
                      {item.title}
                    </a>
                  </strong>
                  <div className="rating">
                    <span>
                      <i>
                        <AiFillStar color={iro1} />
                      </i>
                      <i>
                        <AiFillStar color={iro2} />
                      </i>
                      <i>
                        <AiFillStar color={iro3} />
                      </i>
                      <i>
                        <AiFillStar color={iro4} />
                      </i>
                      <i>
                        <AiFillStar color={iro5} />
                      </i>
                    </span>
                    <span className="datetime ">{item.createdDate}</span>
                    <span className="total-views ">
                      <span>
                        <AiFillEye />
                      </span>
                      <span>50+ Views</span>
                    </span>
                  </div>
                  <div className="review-data">
                    <p>{item.content}</p>
                    <br></br>
                  </div>
                  <div className="count-section ">
                    <div className="pull-left ">
                      <div className="like col-2">
                        <span>
                          <AiFillLike />
                        </span>
                        <span style={{ margin: "0 8px" }}>Like</span>
                        <span className="count">0</span>
                      </div>
                      <div
                        className="comment col-3"
                        onClick={() => {
                          handleChangeHidenDiv();
                        }}
                      >
                        <span>
                          <AiOutlineComment />
                        </span>
                        <span style={{ margin: "0 8px" }}>Comment</span>
                        <span className="count">0</span>
                      </div>
                      <div className="share col-3">
                        <span>
                          <AiOutlineShareAlt />
                        </span>
                        <span style={{ margin: "0 8px" }}>Share</span>
                        <span className="count">0</span>
                      </div>
                    </div>
                    <div className="pull-right ">
                      <span>
                        <FaReplyAll />
                      </span>
                      <span style={{ margin: "0 8px" }}>Reply as Brand</span>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div
                style={{
                  display: displayDiv,
                  boxSizing: "border-box",
                  paddingLeft: "170px",
                  width: "100%",
                }}
              >
                <input
                  style={{
                    width: "100%",
                    height: "35px",
                    outline: "none",
                    border: "0.9px solid #b4bfbf",
                    boxSizing: "border-box",
                    padding: "5px 15px",
                  }}
                  type="text"
                  placeholder="Your comment"
                  value={comment}
                  onChange={(event) => {
                    handleChangeComment(event);
                  }}
                  onKeyPress={(event) => {
                    if (event.key === "Enter") {
                      setComment("");
                      saveComment(item.id);
                    }
                  }}
                />
              </div>
              {commentList.map((item1) =>
                item1.reviewId === item.id ? (
                  <div
                    style={{
                      display: "block",
                      marginLeft: "200px",
                      marginTop: "15px",
                    }}
                  >
                    <p style={{ boxSizing: "border-box", paddingLeft: "30px" }}>
                      Luongminh:{" "}
                      <span style={{ fontWeight: "bold" }}>
                        {item1.content}
                      </span>
                    </p>
                  </div>
                ) : (
                  <div></div>
                )
              )}
            </div>
            <div className="col-3">
              <div className="banner">
                <a
                  href="https://www.mouthshut.com/Review-Of-The-Day-Contest"
                  target={"_blank"}
                >
                  <img
                    width={300}
                    height={250}
                    src="https://image3.mouthshut.com/images/Offline/Common/Images/MS-Banner/MS-Banner-new.png"
                  ></img>
                </a>
              </div>
              <div className="banner">
                <a
                  href="https://www.confluent.io/get-started/?utm_medium=display&utm_source=google&utm_campaign=ch.display_tp.rmkt_tgt.cc-propensity-page-visit_rgn.global_lng.eng_dv.all_con.get-started&utm_term=&creative=60daytrial-30Days&device=c&placement=www.mouthshut.com&gclid=CjwKCAjww8mWBhABEiwAl6-2RfbPTP8Rj2Yv5_nMWrBYyIYSrqXYftloznYvL1j5lpA5AL03u645uRoCQnwQAvD_BwE"
                  target={"_blank"}
                >
                  <img
                    width={300}
                    height={250}
                    src="https://tpc.googlesyndication.com/simgad/13898204061044443641?sqp=4sqPyQQ7QjkqNxABHQAAtEIgASgBMAk4A0DwkwlYAWBfcAKAAQGIAQGdAQAAgD-oAQGwAYCt4gS4AV_FAS2ynT4&rs=AOga4qnObcVQIlEEukr0ItI1RQcp5W_fLw"
                  ></img>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Card;
