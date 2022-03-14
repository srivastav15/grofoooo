import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login_bg">
      <div className="container">
        <div className="row">
          <div className="col-sm-8 col-sm-offset-2 login">
            <div className="col-sm-6  text-center login_left">
              <i className="ion-person login_icon"></i>
              <span className="login_text">First Time?</span>
              <span className="login_text">
                Create an account to make future <br />
                purchases easier.
              </span>
              <Link
                to="/register"
                className="btn btn-action btn-gplus wow fadeInDown nomargin"
                data-wow-delay="0.3s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.3s",
                  animationName: "fadeInDown",
                }}
              >
                <span>
                  <i className="ion-person-stalker"></i>
                </span>
                <span>Create Account</span>
              </Link>
            </div>
            <div className="col-sm-6 text-center login_form">
              <p className="l_f_title">First time?</p>
              <p
                className="wow fadeInDown l_f_subtext nomargin"
                data-wow-delay="0.2s"
              >
                It only takes a minute to login with indexfing.
              </p>
              <div className="subform wow fadeInDown " data-wow-delay="0.3s">
                <form
                  id="signup"
                  className="formee"
                  action="submit"
                  method="post"
                >
                  <input
                    name="email"
                    id="email"
                    type="text"
                    placeholder="Email"
                  />
                  <div className="form_error" style={{ display: "none" }}>
                    This field is required
                  </div>
                  <input
                    name="password"
                    id="password"
                    type="password"
                    placeholder="Password"
                  />
                </form>
                <a
                  href="search_list_new.html"
                  className="btn btn-action btn-gplus wow fadeInDown"
                  data-wow-delay="0.3s"
                >
                  <span>
                    <i className="ion-person-stalker"></i>
                  </span>
                  <span>Login</span>
                </a>

                <span className="l_f_or">or</span>

                <div className="f_password">
                  <a href="forget_password.html">Forgot password? </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
