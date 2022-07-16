import React from "react";
import "../styles/Footer.css";
function Footer(props) {
  return (
    <div className="footer">
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
          <div className="col-4">
            <div className="rod-wrapper">
              <div className="rod-footer-title">Review of the Day</div>
              <div className="rod-footer-content">
                <div className="rod-footer-img"></div>
                <div className="rod-footer-content">
                  <div className="footer-review-title">
                    This company is a cheat
                  </div>
                  <div className="footer-prod-title">On: Homelane.com</div>
                  <div className="footer-user-name">
                    <span>By</span>
                    <span>sanjaykrdebskd</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4"></div>
          <div className="col-4"></div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
