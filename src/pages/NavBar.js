import React from "react";

const NavBar = () => {
  const handleLogoClick = () => {
    console.log("logo clicked");
  };
  const handleLogin = () => {
    console.log("login clicked");
  };
  return (
    <>
      <div>
        <div onClick={handleLogoClick}>
          <img
            src="/images/header_logo.png"
            style={{ width: "147px", height: "50px" }}
          />
        </div>
        <div>
          <h3>Location</h3>
        </div>
        <div>
          <h3>My Cart</h3>
        </div>
        <div>
          <button onClick={handleLogin}>Sign In</button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
