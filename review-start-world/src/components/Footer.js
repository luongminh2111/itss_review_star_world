import React from "react";
import "../styles/Footer.css";
function Footer(props) {
  return (
    <div className="footer" style={{ marginTop: "30px" }}>
      <div className="content-center">
        <div className="primary-footer-wrapper row">
          <div className="primary-footer-holder col-12">
            <div className="primary-footer-content">
              <div className="primary-footer-left">12</div>
              <div className="primary-footer-right">
                <div>LAKH</div>
                <div>Products Listed</div>
              </div>
            </div>
            <div className="primary-footer-content">
              <div className="primary-footer-left">700</div>
              <div className="primary-footer-right">
                <div>MILLION</div>
                <div>Shopping Decisions Influenced</div>
              </div>
            </div>
            <div className="primary-footer-content">
              <div className="primary-footer-left"></div>
              <div className="primary-footer-right">
                <div>MouthShut for Brands</div>
                <div>
                  <a>Discover how we can help brands</a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12" style={{ marginTop: "20px" }}>
            <p>
              Author: グループ6　
              <br></br>
              <hr />
              ルオン・ヴァン・ミン
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
