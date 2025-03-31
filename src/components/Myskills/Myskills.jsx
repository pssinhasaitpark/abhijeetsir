import React from "react";

const Myskills = () => {
  return (
    <div>
      <p className="fs-1 fw-bold text-center">
        <span className="text-white">MY</span>
        <span className="text-danger ms-3">SKILLS</span>{" "}
      </p>
      <div className="row">
        <div className="col-6">
          <div>
            <p className="text-white fw-light mt-2 ">HTML</p>
            <div
              class="progress border border-white bg-transparent"
              role="progressbar"
              aria-label="Danger example"
              aria-valuenow="90"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                class="progress-bar bg-danger"
                style={{ width: "90%" }}
              ></div>
            </div>
          </div>
          <div>
            <p className="text-white mt-2 fw-light">CSS</p>
            <div
              class="progress border border-white bg-transparent"
              role="progressbar"
              aria-label="Danger example"
              aria-valuenow="80"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                class="progress-bar bg-danger"
                style={{ width: "80%" }}
              ></div>
            </div>
          </div>
          <div>
            <p className="text-white  mt-2 fw-light">PHP</p>
            <div
              class="progress border border-white bg-transparent"
              role="progressbar"
              aria-label="Danger example"
              aria-valuenow="70"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                class="progress-bar bg-danger"
                style={{ width: "70%" }}
              ></div>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div>
            <p className="text-white mt-2 fw-light">WORDPRESS</p>
            <div
              class="progress border border-white bg-transparent"
              role="progressbar"
              aria-label="Danger example"
              aria-valuenow="70"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                class="progress-bar bg-danger"
                style={{ width: "70%" }}
              ></div>
            </div>
          </div>
          <div>
            <p className="text-white mt-2 fw-light">JAVASCRIPT</p>
            <div
              class="progress border border-white bg-transparent"
              role="progressbar"
              aria-label="Danger example"
              aria-valuenow="80"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                class="progress-bar bg-danger"
                style={{ width: "80%" }}
              ></div>
            </div>
          </div>
          <div>
            <p className="text-white mt-2 fw-light">PYTHON</p>
            <div
              class="progress border border-white bg-transparent"
              role="progressbar"
              aria-label="Danger example"
              aria-valuenow="90"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                class="progress-bar bg-danger"
                style={{ width: "90%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-danger">
        <p className="text-white text-center p-5 fs-5 mt-5">
          "GREAT THINGS ARE DONE BY A SERIES OF SMALL <br /> THINGS BROUGHT
          TOGETHER"
        </p>
      </div>
    </div>
  );
};

export default Myskills;
