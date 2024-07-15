import React from "react";

function Login() {
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

          <div className="login_heading">Log In to Ecomgyan</div>
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
            <a href="" className="hyperlink">
              Forgot Password?
            </a>
          </div>

          <div className="d-flex mt-2">
            <input type="checkbox" />
            <div
              className=""
              style={{
                color: "black",
                fontSize: "15px",
                fontWeight: "700",
                marginLeft: "10px",
              }}
            >
              Remember Me
            </div>
          </div>

          <div className="login_button">Login</div>

          <div
            className="text-center d-flex  mt-3 justify-content-center mb-3"
            style={{ color: "black", fontSize: "15px" }}
          >
            New to Ecomgyan ?
            <a href="signup" className="hyperlink1 px-1">
              Sign Up Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
