import React from "react";

function Signup() {
  return (
    <div className="container">
      <div className="row mt-2 col-md-12 justify-content-center">
        <div className="col-md-4">
          <div className="d-flex justify-content-center">
            <img
              src="./images/eg.png"
              alt="loading..."
              style={{ height: "150px", textAlign: "center" }}
            />
          </div>

          <div className="login_heading">Sign Up to Ecomgyan</div>
          <div className="mt-3">
            <div className="label">Name</div>
            <input
              type="text"
              placeholder="Please Enter Email"
              className="input_box"
            />
          </div>
          <div className="mt-3">
            <div className="label">Email</div>
            <input
              type="text"
              placeholder="Please Enter Email"
              className="input_box"
            />
          </div>
          <div className="mt-3">
            <div className="label">Password</div>
            <input
              type="text"
              placeholder="Please Enter Password"
              className="input_box"
            />
          </div>

          <div className="d-flex mt-3">
            <input type="checkbox" />
            <div
              className=""
              style={{
                color: "black",
                fontSize: "14px",
                marginLeft: "10px",
              }}
            >
              I agree with the Privacy Policy and Terms & Conditions
            </div>
          </div>

          <div className="login_button">Sign Up</div>

          <div
            className="text-center d-flex  mt-3 justify-content-center mb-3"
            style={{ color: "black", fontSize: "15px" }}
          >
            Already have an account?
            <a href="login" className="hyperlink1 px-1">
              Log In
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
