import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  const [allcourse, getAllcourse] = useState([]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  const styles = {
    Asset05: {
      height: "240px",
    },
    bgImg: {
      height: "240px",
      position: "absolute",
      right: "16px",
      bottom: "242px",
    },
    courseCardTag: {
      color: "rgb(255, 255, 255)",
      background: "rgb(253, 179, 6)",
      display: "flex",
      alignItems: "center",
      gap: "4px",
    },
  };

  useEffect(() => {
    getCourses();
  }, []);

  const getCourses = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8081/api/mycourse/getallcourses"
      );
      if (response.status === 200) {
        getAllcourse(response.data.data);
      }
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <div>
      <div className="home-section p-3">
        <div
          style={{
            backgroundColor: "#0070f9",
            borderRadius: "20px",
            height: "260px",
          }}
        >
          <div className="conatiner">
            <div className="bg-image" />
            <div className="row">
              <div className="col-md-6">
                <div className="p-4">
                  <p className="home-page-section-one-text">
                    Faster Way For Your Grow & Upskill
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <img
                  className="home-style-bg-image"
                  src="./images/Heros-04.png"
                  alt=""
                  id="logo"
                />
              </div>
            </div>
          </div>
        </div>
        <br /> <br />
        <div className="row">
          <div className="col-md-6">
            <div className="p-2">
              <img
                src="./images/upskilljpg-013.jpg"
                alt=""
                style={{ width: "100%", borderRadius: "34px" }}
              />
            </div>
          </div>
          <div className="col-md-6 mt-5 pt-4">
            <h2 style={{ fontSize: "41px", textAlign: "center" }}>
              Why Ecom Gyan?
            </h2>
            <br />
            <div className="row p-2">
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-2">
                    <i
                      class="fa-solid fa-coins"
                      style={{ color: "#0070f9", fontSize: "18px" }}
                    ></i>
                  </div>
                  <div className="col-md-10">
                    <h3 style={{ fontSize: "18px" }}>Intensive Learning</h3>
                    <p style={{ fontSize: "14px", color: "gray" }}>
                      Lorem ipsum dolor sit amet consectetur adipiscing elit
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-2">
                    <i
                      class="fa-solid fa-coins"
                      style={{ color: "#0070f9", fontSize: "18px" }}
                    ></i>
                  </div>
                  <div className="col-md-10">
                    <h3 style={{ fontSize: "18px" }}>Intensive Learning</h3>
                    <p style={{ fontSize: "14px", color: "gray" }}>
                      Lorem ipsum dolor sit amet consectetur adipiscing elit
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-2">
                    <i
                      class="fa-solid fa-coins"
                      style={{ color: "#0070f9", fontSize: "18px" }}
                    ></i>
                  </div>
                  <div className="col-md-10">
                    <h3 style={{ fontSize: "18px" }}>Intensive Learning</h3>
                    <p style={{ fontSize: "14px", color: "gray" }}>
                      Lorem ipsum dolor sit amet consectetur adipiscing elit
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-2">
                    <i
                      class="fa-solid fa-coins"
                      style={{ color: "#0070f9", fontSize: "18px" }}
                    ></i>
                  </div>
                  <div className="col-md-10">
                    <h3 style={{ fontSize: "18px" }}>Intensive Learning</h3>
                    <p style={{ fontSize: "14px", color: "gray" }}>
                      Lorem ipsum dolor sit amet consectetur adipiscing elit
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br /> <br />
        <div>
          <h2 style={{ fontSize: "41px", textAlign: "center" }}>
            Featured classes
          </h2>
          <br />
          <div className="row">
            {allcourse.map((data, index) => (
              <div className="col-md-3 mb-4" key={index}>
                <Link
                  to="/coursesdetail"
                  state={{ courseData: data }}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <div className="courseCard-0-1-330">
                    <div
                      className="courseCardTag-0-1-331"
                      style={styles.courseCardTag}
                    >
                      <i className="fa-solid fa-star"></i> Featured Course
                    </div>
                    <div className="courseCardImage-0-1-334">
                      <img
                        className="courseCardImage-0-1-334"
                        src={`http://localhost:8081/course/${data.thumbnailImage}`}
                        alt=""
                      />
                    </div>
                    <div className="courseCardContent-0-1-335">
                      <div className="courseCardTitle-0-1-336">
                        {data.courseName}
                      </div>
                      <div className="courseCreatedBy-0-1-338">
                        Created by: You(Owner)
                      </div>
                      <div className="courseCardTags-0-1-333">
                        {data.durationType}
                      </div>
                      <br />
                      <div className="courseCardPriceSection-0-1-337">
                        <div
                          style={{
                            color: "rgb(10, 22, 41)",
                            fontWeight: "700",
                          }}
                        >
                          ₹{data.price}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <br /> <br />
        <div className="row">
          <div className="col-md-6 ">
            <div
              className="p-3"
              style={{
                backgroundColor: "transparent",
                backgroundImage:
                  "linear-gradient(180deg, #DEEDFF 0%, #72BAFF 100%)",
                borderRadius: "34px",
              }}
            >
              <div className="row">
                <div className="col-md-6" style={{ padding: "23px 49px 0px" }}>
                  <h1 className="bgcolrforFourthSectLeft">Learning</h1>
                  <h1 className="bgcolrforFourthSectLeft">Bootcamp & </h1>
                  <h1 className="bgcolrforFourthSectLeft">program</h1>
                  <p>
                    <a href="#">Read More</a>
                  </p>
                </div>
                <div className="col-md-6">
                  <img
                    src="./images/Asset-039.png"
                    alt=""
                    style={{ width: "90%" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div
              className="p-3"
              style={{
                backgroundColor: "transparent",
                backgroundImage:
                  "linear-gradient(75deg, #E4F1F4 0%, #67BDBA 100%)",
                borderRadius: "34px",
              }}
            >
              <div className="row">
                <div className="col-md-6" style={{ padding: "23px 49px 0px" }}>
                  <h1 className="bgcolrforFourthSectLeft">Learning</h1>
                  <h1 className="bgcolrforFourthSectLeft">Bootcamp & </h1>
                  <h1 className="bgcolrforFourthSectLeft">program</h1>
                  <p>
                    <a href="#">Read More</a>
                  </p>
                </div>
                <div className="col-md-6">
                  <img
                    src="./images/Asset-028.png"
                    alt=""
                    style={{ width: "90%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <br /> <br />
        <div className="heading text-center mt-4">How to Use?</div>
        <iframe
          width="100%"
          height="450"
          src="https://www.youtube.com/embed/ZeY07Asv4KE"
          title="Big Reason Behind Changing My Youtube Channel Name!!!"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
          className="mt-4"
          style={{ borderRadius: "10px" }}
        ></iframe>
        <br /> <br />
        <div className="heading text-center mt-4">FAQs</div>
        <div class="accordion accordion-flush mb-5" id="accordionFlushExample">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed accordion_text"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                Does Amazon Have a Software for Sellers?
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                first item's accordion body.
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed accordion_text"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                What Is an Amazon Seller Platform?
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                second item's accordion body. Let's imagine this being filled
                with some actual content.
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed accordion_text"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                What Software Do You Need to Sell on Amazon?
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                third item's accordion body. Nothing more exciting happening
                here in terms of content, but just filling up the space to make
                it look, at least at first glance, a bit more representative of
                how this would look in a real-world application.
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed accordion_text"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFour"
                aria-expanded="false"
                aria-controls="flush-collapseFour"
              >
                What Is the Best Software for Selling on Amazon?
              </button>
            </h2>
            <div
              id="flush-collapseFour"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                third item's accordion body. Nothing more exciting happening
                here in terms of content, but just filling up the space to make
                it look, at least at first glance, a bit more representative of
                how this would look in a real-world application.
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed accordion_text"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFive"
                aria-expanded="false"
                aria-controls="flush-collapseFive"
              >
                What Is Ecomgyan 10 and How Does It Work?
              </button>
            </h2>
            <div
              id="flush-collapseFive"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                third item's accordion body. Nothing more exciting happening
                here in terms of content, but just filling up the space to make
                it look, at least at first glance, a bit more representative of
                how this would look in a real-world application.
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed accordion_text"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseSix"
                aria-expanded="false"
                aria-controls="flush-collapseSix"
              >
                Why Do I Need Ecomgyan 10?
              </button>
            </h2>
            <div
              id="flush-collapseSix"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                third item's accordion body. Nothing more exciting happening
                here in terms of content, but just filling up the space to make
                it look, at least at first glance, a bit more representative of
                how this would look in a real-world application.
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed accordion_text"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseSeven"
                aria-expanded="false"
                aria-controls="flush-collapseSeven"
              >
                How Much Is Ecomgyan 10?
              </button>
            </h2>
            <div
              id="flush-collapseSeven"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                third item's accordion body. Nothing more exciting happening
                here in terms of content, but just filling up the space to make
                it look, at least at first glance, a bit more representative of
                how this would look in a real-world application.
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed accordion_text"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseEight"
                aria-expanded="false"
                aria-controls="flush-collapseEight"
              >
                How Accurate Is Ecomgyan 10?
              </button>
            </h2>
            <div
              id="flush-collapseEight"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                third item's accordion body. Nothing more exciting happening
                here in terms of content, but just filling up the space to make
                it look, at least at first glance, a bit more representative of
                how this would look in a real-world application.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
