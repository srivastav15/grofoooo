import React from "react";

const ContactUs = () => {
  return (
    <div id="main" className="main business_home_hero business_login">
      <div div="" className="hero">
        <div className="container">
          <div className="row">
            <div className="c-u-p-heading-box col-sm-12">
              <h1 className="c-u-p-title">Contact us</h1>
              <p className="c-u-p-subtext">
                Please leave your contact details here and we’ll get back to you
                within <br />
                24 hours or give us a missed call here
              </p>
              <span className="support-call">Call us at +91-80396 54500</span>
            </div>
            <div className="col-sm-6">
              <div className="bis-box-text">
                <img
                  src="assets/images/b_contact_img.png"
                  className="business-image"
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="bis-box-text">
                <div className="formee">
                  <input type="text" placeholder="City" />
                  <input
                    type="text"
                    placeholder="Enter Your restaurant or shop"
                  />
                  <input type="text" placeholder="Enter your full name" />
                  <input type="text" placeholder="Enter your email id" />
                  <input type="text" placeholder="Enter your phone number" />
                  <select>
                    <option value="1">Select support type</option>
                    <option value="2">Enterprise Support</option>
                    <option value="3">Technical Support</option>
                  </select>
                  <div className="business-login-box">
                    <button
                      className="business-btn"
                      onClick='location.href="Business_Home.html";'
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
