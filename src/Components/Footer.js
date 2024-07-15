import React from "react";

function Footer() {
  return (
    <div className="row footer">
      <div className="col-md-3">
        <img
          src="./images/eg.png"
          style={{ height: "150px" }}
          alt="loading..."
        />
        <div className="" style={{ color: "#b6aeae", fontSize: "13px" }}>
          Great lesson ideas and lesson plans for ESL teachers! Educators can
          customize lesson plans to best.
        </div>
      </div>
      <div className="col-md-3 text-center mt-3">
        <div className=" f-heading">Comapany</div>
        <div className="f-desc mt-3">Home</div>
        <div className="f-desc">About Us</div>
        <div className="f-desc">Tools</div>
        <div className="f-desc">Courses</div>
        <div className="f-desc">Blog</div>
      </div>

      <div className="col-md-3 text-center mt-3">
        <div className=" f-heading">Platform</div>
        <div className="f-desc  mt-3">Browse Library</div>
        <div className="f-desc">Library</div>
        <div className="f-desc">Partners</div>
        <div className="f-desc">News & Blogs</div>
        <div className="f-desc">FAQs</div>
      </div>

      <div className="col-md-3  mt-3">
        <div className="f-heading">Subscribe</div>
        <input
          type="text"
          className="f-input"
          placeholder="Your Email Address"
        />
        <div className="f-desc1">
          Get the latest news and updates right at your inbox.
        </div>
      </div>
    </div>
  );
}

export default Footer;
