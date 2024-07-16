import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Coursesdetails() {
  const location = useLocation();
  const { courseData } = location.state || {};
  const [getallmodule, setgetallmodule] = useState([]);

  console.log(courseData);

  console.log("courseData======", courseData);

  useEffect(() => {
    getallCoursesModule();
  }, []);

  const getallCoursesModule = async () => {
    try {
      const response = await axios.get(
        `https://api.proleverage.io/api/coursemodule/getmodulesbyid/${courseData._id}`
      );
      if (response.status === 200) {
        setgetallmodule(response.data.data);
      }
    } catch (error) {
      console.warn(error);
    }
  };

  console.log("getallmodule=====", getallmodule);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 mt-3 mb-3">
          <div
            className="heading pb-2"
            style={{ textAlign: "left", fontSize: "16px" }}
          >
            {courseData.courseName}
          </div>

          <img
            className="courseCardImage-0-1-334"
            src={`https://api.proleverage.io/course/${courseData.thumbnailImage}`}
            alt=""
            style={{ width: "100%", height: "250px", borderRadius: "8px" }}
          />
          <p className="mt-3 mb-3">{courseData.courseDescription}</p>

          <div
            className="heading mb-2"
            style={{ textAlign: "left", fontSize: "16px" }}
          >
            About This Course
          </div>
          <div className="desc mb-1">{courseData.durationType}</div>
          <div className="desc mb-1">{courseData.validity}</div>
          <div className="desc mb-1">{courseData.validityPeriod}</div>

          <div
            className="heading mb-2 mt-2"
            style={{ textAlign: "left", fontSize: "16px" }}
          >
            Lifetime Access
          </div>
          <div className="desc">{courseData.courseDescription}</div>

          <Link to="/content" style={{ textDecoration: "none" }}>
            <div className="row mt-3 p-2">
              <div
                className="heading mb-2 mt-2"
                style={{ textAlign: "left", fontSize: "16px" }}
              >
                Modules
              </div>
              <div className="col-md-11"></div>
            </div>
          </Link>

          {getallmodule.map((data) => (
            <Link
              to={`/content/${data._id}`}
              style={{ textDecoration: "none" }}
              key={data.id}
            >
              <div
                className="row"
                style={{
                  backgroundColor: "#80808024",
                  borderRadius: "10px",
                  padding: "10px",
                  marginBottom: "17px",
                }}
              >
                <div style={{ color: "black", fontWeight: "bold" }}>
                  {data.moduleTitle}
                </div>
              </div>
            </Link>
          ))}

          <div
            className="heading mb-2 mt-4"
            style={{ textAlign: "left", fontSize: "16px" }}
          >
            Pricing Details
          </div>

          <div className="row border p-2 mt-3" style={{ borderRadius: "10px" }}>
            <div className="col-md-8">You Pay</div>
            <div className="d-flex col-md-4 justify-content-end">
              ₹{courseData.price}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Coursesdetails;
