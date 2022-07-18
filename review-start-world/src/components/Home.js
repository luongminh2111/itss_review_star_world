import React, { useEffect, useState } from "react";
import "../styles/Home.css";
import { FaPencilAlt } from "react-icons/fa";
import "../styles/Card.css";
import Header from "./Header";
import Footer from "./Footer";
import { useHistory } from "react-router-dom";
import { AiOutlineShareAlt } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import { AiOutlineComment } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
import { FaReplyAll } from "react-icons/fa";
import ReviewService from "../services/ReviewService";
function Home(props) {
  const history = useHistory();
  const [cardList, setCardList] = useState([]);

  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    ReviewService.getAll().then((res) => {
      console.log("res data : ", res.data);
      setCardList(res.data);
    });
  };
  const showCard = cardList.map((item) => (
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
                <span className="datetime ">{item.createDate}</span>
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
  ));
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
                {showCard}
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
