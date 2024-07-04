// Strip12.jsx

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoneyBillWave,
  faClock,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import "./strip12.css";

const Strip12 = () => {
  return (
    <div className="fundraising-strip">
      <div className="fundraise-item">
        <div className="icon">
          <FontAwesomeIcon icon={faMoneyBillWave} className="icon-img" />
        </div>
        <div className="text">
          <span className="fundraise-text">Fundraise at 0%* platform fee</span>
          <div className="custom-border"></div>
        </div>
      </div>

      <div className="fundraise-item">
        <div className="icon">
          <FontAwesomeIcon icon={faClock} className="icon-img" />
        </div>
        <div className="text">
          <span>Quick Funds Disbursal</span>
          <div className="custom-border"></div>
        </div>
      </div>

      <div className="fundraise-item">
        <div className="icon">
          <FontAwesomeIcon icon={faUsers} className="icon-img" />
        </div>
        <div className="text">
          <span>40,000+ Patients Supported</span>
          <div className="custom-border"></div>
        </div>
      </div>

      <div className="fundraise-item">
        <div className="icon">
          <FontAwesomeIcon icon={faUsers} className="icon-img" />
        </div>
        <div className="text">
          <span>2+ Lakh Lives Impacted</span>
        </div>
      </div>
    </div>
  );
};

export default Strip12;
