import React from "react";
import { FaGlassMartini } from "react-icons/fa";
import { IoDiamondOutline } from "react-icons/io5";
import { FaHashtag } from "react-icons/fa6";
import Button from "../Button/Button";
import "./Services.css"

const Services = () => {
  return (
    <div>
      <div>
        <p className="fs-1 fw-bold text-center">
          <span className="text-white">MY</span>
          <span className="text-danger ms-3">SERVICES</span>
        </p>
      </div>
      <div className="row">
        <div className="col-sm-4 mb-3">
          <div className="hover-card card bg-black ">
            <div className="d-flex justify-content-center my-3">
              <div className="bg-danger text-center rounded-circle d-flex align-items-center justify-content-center" style={{ width: '80px', height: '80px' }}>
                <FaGlassMartini className="text-white fs-1" />
              </div>
            </div>
            <p className="fs-4 fw-bold text-white text-center">Network Administration</p>
            <div>
            <ul className="text-white">
                <li>
                Design and Setup
                </li>
                <li>
                Maintenance & Optimization
                </li>
                <li>
                Troubleshooting
                </li>
              </ul>
            </div>
            <div className="mx-auto">
              <Button />
            </div>
          </div>
        </div>
        <div className="col-sm-4 mb-3">
          <div className="card bg-black hover-card">
            <div className="d-flex justify-content-center my-3">
              <div className="bg-danger text-center rounded-circle d-flex align-items-center justify-content-center" style={{ width: '80px', height: '80px' }}>
                <IoDiamondOutline className="text-white fs-1" />
              </div>
            </div>
            <p className="fs-4 fw-bold text-white text-center">Server Management</p>
            <div>
              <ul className="text-white">
                <li>
                Server Installation & Configuration
                </li>
                <li>
                Performance Monitoring & Upgrades
                </li>
                <li>
                Backup Solutions
                </li>
              </ul>
            </div>
            <div className="mx-auto">
              <Button />
            </div>
          </div>
        </div>
        <div className="col-sm-4 mb-3">
          <div className="card bg-black hover-card">
            <div className="d-flex justify-content-center my-3">
              <div className="bg-danger text-center rounded-circle d-flex align-items-center justify-content-center" style={{ width: '80px', height: '80px' }}>
                <FaHashtag className="text-white fs-1" />
              </div>
            </div>
            <p className="fs-4 fw-bold text-white text-center"> IT Support & Troubleshooting</p>
            <div>
              <ul className="text-white">
                <li>
                24/7 Support
                </li>
                <li>
                  Issue Resolution
                </li>
                <li>
                User Assistance
                </li>
              </ul>
            </div>
            <div className="mx-auto">
              <Button />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
