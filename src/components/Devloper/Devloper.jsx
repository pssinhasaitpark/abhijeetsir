import React from "react";
import { image4 } from "../../assets/images/index";
import Button from "../Button/Button";
import "./Devloper.css";

const Developer = () => {
  return (
    <div className="py-5">
      <div className="row">
        <div className="col-sm-6 ">
          <div className="image4">
            <img
              className="w-100"
              src={image4}
              alt="Devloperimage"
            />
          </div>
        </div>
        <div className="col-sm-6  d-flex justify-content-center">
          <div className="text-white">
            <p className=" devloperTitle fw-bold ">
              <span className="text-danger">IT Support &</span>{" "}
              <span className="text-white">Troubleshooting</span>
            </p>
            <ul>
              <li><strong>Technology Assessment:</strong> Evaluating existing IT systems and recommending improvements for better efficiency, security, and cost-effectiveness.</li>
              <li><strong>Long-Term IT Planning:</strong> Developing strategic IT roadmaps to align technology with business goals and future growth.</li>
              <li><strong>Vendor Management:</strong> Assisting in the selection and management of third-party technology vendors to ensure you get the best services for your needs.</li>
            </ul>

            <Button />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Developer;
