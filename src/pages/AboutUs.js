import React from "react";

const AboutUs = () => {
  return (
    <>
      <div
        className="inner-page-hero bg-image"
        style={{
          background: "url(assets/images/about_us_bg.png)",
          "background-position": "center center",
          "background-size": "contain",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 aboutus_desc">
              <div className="text-center white-txt">
                <h6>
                  <a href="#">About US</a>
                </h6>
                <p className="info_sub_text">Grocery to eatery </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="result-show m-0">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-3">
              <p>
                <span className="">
                  <strong>Home / About Us</strong>
                </span>
              </p>
            </div>
            <div className="col-sm-9 text-right">
              <a
                className="btn btn-action btn-gplus wow fadeInDown nomargin"
                data-wow-delay="0.3s"
                style={{
                  visibility: "visible",
                  "animation-delay": "0.3s",
                  "animation-name": "fadeInDown",
                }}
              >
                <span>
                  <i className="ion-ios-box"></i>
                </span>
                <span href="#">Contact Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="buyer" className="fa-point-work how-it-works bg-aboutus">
        <div className="container">
          <div className="row text-center">
            <div className="col-sm-8 col-sm-offset-2">
              <div className="points-intro text-center">
                <h1 className="wow fadeInDown">
                  <img
                    className="title_img"
                    src="assets/images/ic_title_aboutus.png"
                  />
                </h1>
              </div>
            </div>

            <div className="col-xs-12 col-sm-12 col-md-8  how-it-works-steps white-txt col-md-offset-2">
              <div className="about_us">
                <div className="about_details">
                  <p>
                    Save more with indexfing! We give you the lowest prices on
                    all your grocery and food needs.
                  </p>
                  <p>
                    indexfing is a low-price online supermarket that gets
                    grocery and food products across categories like grocery,
                    fruits & vegetables, beauty & wellness, household care, baby
                    care, pet care and meats & seafood delivered to your
                    doorstep.
                  </p>
                  <ul className="list">
                    <li>
                      {" "}
                      Choose from over 2,000 grocery and food at lower prices
                      than supermarkets every day.
                    </li>
                    <li>Unlimited choice of Indian grocery and food. </li>
                    <li>
                      Pickup at your convenience Delivery at your door steps.
                    </li>
                    <li>
                      Enjoy Indian grocery and food ever before with indexfing.{" "}
                    </li>
                  </ul>
                  <span className="big_text">
                    Happy Shopping with indexfing!
                  </span>

                  <p>Why should I use indexfing.com?</p>
                  <p>
                    Indexfing will let you concentrate on your new business
                    models, products, stores, and customers as it frees up your
                    time from worrying about technology, with our cutting-edge
                    technology protection on your stores by 24/7 and 365 days.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-12">
              <div className="col-xs-12 col-sm-12 col-md-3 how-it-works-steps white-txt col1">
                <div className="how-it-works-wrap">
                  <div className="step step-1">
                    <div className="icon" data-step="1">
                      <img src="assets/images/ic_user.png" />
                    </div>
                    <h3>100+</h3>
                    <p className="sub_text">
                      People have joined the indexfing team
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-3 how-it-works-steps white-txt col2">
                <div className="step step-2">
                  <div className="icon" data-step="2">
                    <img src="assets/images/ic_growth.png" />
                  </div>
                  <h3>4x</h3>
                  <p className="sub_text">
                    Rate of growth in our monthly user base
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-3 how-it-works-steps white-txt col3 arrow">
                <div className="step step-3">
                  <div className="icon" data-step="3">
                    <img src="assets/images/ic_city.png" />
                  </div>
                  <h3>10 days</h3>
                  <p className="sub_text">
                    Time taken to launch in 18 cities across India
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-3 how-it-works-steps white-txt col3 arrow">
                <div className="step step-2">
                  <div className="icon" data-step="4">
                    <img src="assets/images/userjoin.png" />
                  </div>
                  <h3>10 K+</h3>
                  <p className="sub_text">
                    Rate of indexfing users register monthly base
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
