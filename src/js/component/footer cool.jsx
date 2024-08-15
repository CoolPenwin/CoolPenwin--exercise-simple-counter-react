import React from "react";

const FooterCool = ({ isPressed }) => {
  return (
    <div className={isPressed ? 'human-text' : 'font-aurabesh'}>
    <div className="container d-flex justify-content-center">
      <div className="row ">
        <div className="fixed-bottom p-4">
          Made with 🍑 by
          <a href="https://github.com/CoolPenwin">
            <img
              className="logo"
              src="https://avatars.githubusercontent.com/u/171165391?v=4"
              style={{
                border: "1px solid rgb(255, 255, 255)",
                borderRadius: "50%",
                width: "40px",
              }}
              alt="logo"
            />
            CoolPenwin
          </a>{" "}
         
        </div>
      </div>
    </div>
              </div>
  );
};

export default FooterCool;
