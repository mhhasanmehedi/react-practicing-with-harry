import React, { useState } from "react";

const About = ({ mode }) => {
  const myStyle = {
    color: mode === "light" ? "#212529" : "#F8F9FA",
    background: mode === "light" ? "#F8F9FA" : "#212529",
  };

  return (
    <div className="container my-3 rounded border p-4" style={myStyle}>
      <h2 className="my-3">About us</h2>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={{
                background: mode === "light" ? "#F8F9FA" : "#212529",
                color: mode === "light" ? "#212529" : "#F8F9FA",
              }}
            >
              <strong>Analyize your text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              It is shown by default, until the collapse plugin adds the
              appropriate classNamees that we use to style each element. These
              classNamees control the overall appearance, as well as the showing
              and hiding via CSS transitions. You can modify any of this with
              custom CSS or overriding our default variables. It's also worth
              noting that just about any HTML can go within the
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              <strong>Free to use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              This is the second item's accordion body.It is hidden by default,
              until the collapse plugin adds the appropriate classNamees that we
              use to style each element. These classNamees control the overall
              appearance, as well as the showing and hiding via CSS transitions.
              You can modify any of this with custom CSS or overriding our
              default variables.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              This is the third item's accordion body. It is hidden by default,
              until the collapse plugin adds the appropriate classNamees that we
              use to style each element. These classNamees control the overall
              appearance, as well as the showing and hiding via CSS transitions.
              You can modify any of this with custom CSS or overriding our
              default variables.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
