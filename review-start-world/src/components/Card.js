import React, { useState } from "react";
import { AiOutlineShareAlt } from "react-icons/ai";

import { AiFillStar } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import { AiOutlineComment } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
import { FaReplyAll } from "react-icons/fa";
import "../styles/Card.css";
function Card(props) {
  return (
    <>
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
                    Excellent Excellence Star World WWE
                  </a>
                </strong>
                <div className="rating">
                  <span>
                    <i>
                      <AiFillStar color="orange" />
                    </i>
                    <i>
                      <AiFillStar color="orange" />
                    </i>
                    <i>
                      <AiFillStar color="orange" />
                    </i>
                    <i>
                      <AiFillStar color="orange" />
                    </i>
                    <i>
                      <AiFillStar color="orange" />
                    </i>
                  </span>
                  <span className="datetime ">Apr 09, 2022 07:32 PM</span>
                  <span className="total-views ">
                    <span>
                      <AiFillEye />
                    </span>
                    <span>50+ Views</span>
                  </span>
                </div>
                <div className="review-data">
                  <p>
                    Excellent Excellence James Maslow Beau Mirchoff & Brett
                    Davern Excellently Excellency Extremely Extreme Like Likely
                    Extra
                  </p>
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
                    <div className="comment col-3">
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
    </>
  );
}

export default Card;
