import React from "react";

function About() {
  return (
    <div className="container">
      <div className="row col-md-12 pt-5">
        <img src="./images/a3.webp" alt="loading...." className="mb-5" />
        <div className="col-md-6">
          <div className="about-heading">Decor The Dreams with Wood Beauty</div>
          <p className="">
            At Scholarly, we believe that education is the key to unlocking your
            full potential. That's why we offer a wide range of courses across
            various industries and subject areas. Our instructors are experts in
            their fields and bring real-world experience to the classroom
          </p>

          <div className="about-heading">Our mission</div>
          <p className="">
            We work directly with our manufacturers to produce unique, durable
            pieces using high-quality materials.
          </p>

          <div className="about-heading">
            Empowering Lifelong Learning Top-Quality Courses
          </div>
          <p className="">
            Whether you're looking to advance your career, learn a new skill, or
            simply satisfy your curiosity, Scholarly has something for you. Our
            user-friendly platform makes it easy to find.
          </p>
        </div>
        <div className="col-md-6">
          <img
            src="./images/a.webp"
            alt="loading...."
            className="about_image"
          />
          <img
            src="./images/a1.webp"
            alt="loading...."
            className="about_image1"
          />
        </div>

        <div className="row mt-5 mb-5">
          <div className="col-md-6">
            <img
              src="./images/a2.webp"
              alt="loading...."
              style={{ width: "100%", borderRadius: "5px" }}
            />
          </div>
          <div className="col-md-6 mt-5 pt-4">
            <div className="about-heading">
              You too can wear gym fit clothes.
            </div>
            <p>
              Sometimes, choosing good furniture brands to decorate your home
              can be a wise idea.
            </p>
            <div className="a-button">Discover Now</div>
          </div>
        </div>
      </div>
      <div className="row mt-4 mb-5">
        <div className="about-heading">More to discover</div>
        <div className="col-md-4">
          <img
            src="./images/a3.webp"
            alt="loading...."
            style={{ width: "100%" }}
          />
          <div className="about-heading" style={{ marginTop: "10px" }}>
            What we do
          </div>
          <p>
            Sometimes, choosing good furniture brands to decorate your home can
            be a wise idea.
          </p>
          <div
            className="read_more"
            style={{
              marginTop: "-5px",
              fontWeight: "bold",
              fontSize: "14px",
            }}
          >
            View More
          </div>
        </div>
        <div className="col-md-4">
          <img
            src="./images/a4.webp"
            alt="loading...."
            style={{ width: "100%" }}
          />
          <div className="about-heading" style={{ marginTop: "10px" }}>
            What we do
          </div>
          <p>
            Sometimes, choosing good furniture brands to decorate your home can
            be a wise idea.
          </p>
          <div
            className="read_more"
            style={{
              marginTop: "-5px",
              fontWeight: "bold",
              fontSize: "14px",
            }}
          >
            View More
          </div>
        </div>

        <div className="col-md-4">
          <img
            src="./images/a5.webp"
            alt="loading...."
            style={{ width: "100%" }}
          />
          <div className="about-heading" style={{ marginTop: "10px" }}>
            What we do
          </div>
          <p>
            Sometimes, choosing good furniture brands to decorate your home can
            be a wise idea.
          </p>
          <div
            className="read_more"
            style={{
              marginTop: "-5px",
              fontWeight: "bold",
              fontSize: "14px",
            }}
          >
            View More
          </div>
        </div>
      </div>

      <div
        className="row mb-5 mt-4"
        style={{
          backgroundColor: "#010A44",
          padding: "30px",
          borderRadius: "10px",
        }}
      >
        <div
          style={{
            textAlign: "center",
            fontSize: "28px",
            color: "white",
            fontWeight: "bold",
          }}
        >
          Start achieving more today.
        </div>
        <div
          style={{
            color: "#CACACA",
            fontSize: "15px",
            textAlign: "center",
            marginTop: "15px",
          }}
        >
          Porttitor scelerisque eu fringilla consectetur tellus, facilisi
          viverra. Nascetur luctus
        </div>
        <div
          style={{
            color: "#CACACA",
            fontSize: "15px",
            textAlign: "center",
          }}
        >
          feugiat sed aliquam tellus aliquet risus tortor tellus.
        </div>
        <div className="row justify-content-center pt-5">
          <div className="edication">Schedule Education</div>
        </div>
      </div>
    </div>
  );
}

export default About;
