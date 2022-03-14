import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-9 col-xs-12">
            <ul className="footer-link">
              <li>
                <Link to="/about-us">About Us</Link>
              </li>
              <li>
                <Link to="/help-center">Help Center</Link>
              </li>
              <li>
                <Link to="/contact-us">Contact Us</Link>
              </li>
              <li>
                <Link to="/policy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/retailer-login">Retailer login</Link>
              </li>
            </ul>
          </div>
          <div className="col-sm-3 col-md-3 col-xs-12 text-right">
            <ul className="social-link">
              <li>
                <i className="ion-social-facebook social-icon"></i>
              </li>
              <li>
                <i className="ion-social-linkedin social-icon"></i>
              </li>
              <li>
                <i className="ion-social-twitter social-icon"></i>
              </li>
              <li>
                <i className="ion-social-skype social-icon"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
