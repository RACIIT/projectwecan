import React from "react";

const SlidePanel = ({ sidebarTrigger, setSidebarTrigger }) => {
  return (
    <div
      className={`slide-panel off-canvas-panel ${
        sidebarTrigger ? "show-panel" : ""
      }`}
    >
      <div className="panel-overlay" onClick={() => setSidebarTrigger()} />
      <div className="panel-inner">
        <div className="canvas-logo">
          <img src="assets/img/logo.png" alt="" />
        </div>
        <div className="about-us">
          <h5 className="canvas-widget-title">About Us</h5>
          <p>
          WeCan is committed to breaking the silence surrounding menstruation and empowering women and girls with knowledge and access to proper menstrual hygiene resources. Through education and advocacy,
           we can combat the stigma associated with menstruation and improve the overall well-being of women and girls in our society.
          </p>
        </div>
        <div className="contact-us">
          <h5 className="canvas-widget-title">Contact Us</h5>
          <ul>
            <li>
              <i className="far fa-map-marker-alt" />
              57 Ramakrishna Road, Colombo 00600
            </li>
            <li>
              <i className="far fa-envelope-open" />
              <a href="mailto:support@qolle.com">rciit.3220@gmail.com</a>
              {/* <a href="mailto:info@qolle.com">info@seeva.com</a> */}
            </li>
            <li>
              <i className="far fa-phone" />
              <a href="tel:+01234567899">+94 77 741 2320</a>
              <br />
              <a href="tel:+01234567899">+94 76 242 4252</a>
            </li>
          </ul>
        </div>
        <a href="#" className="panel-close" onClick={() => setSidebarTrigger()}>
          <i className="fal fa-times" />
        </a>
      </div>
    </div>
  );
};
export default SlidePanel;
