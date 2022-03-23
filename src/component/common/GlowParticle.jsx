import React from "react";
import { FaStar } from "react-icons/fa";

const GlowParticle = () => {
  return (
    <>
      <div className="glowing">
        <span className="span" style={{ "--i": "1" }}>
          <FaStar className="star" style={{ color: "red", fontSize: "20px" }} />{" "}
        </span>
        <span className="span" style={{ "--i": "2" }}>
          <FaStar
            className="star"
            style={{ color: "crimson", fontSize: "30px" }}
          />
        </span>
        <span className="span" style={{ "--i": "3" }}>
          <FaStar
            className="star"
            style={{ color: "#fff", fontSize: "40px" }}
          />
        </span>
      </div>
      <div className="glowing">
        <span className="span" style={{ "--i": "1" }}>
          <FaStar className="star" style={{ color: "red", fontSize: "20px" }} />{" "}
        </span>
        <span className="span" style={{ "--i": "2" }}>
          <FaStar
            className="star"
            style={{ color: "crimson", fontSize: "30px" }}
          />
        </span>
        <span className="span" style={{ "--i": "3" }}>
          <FaStar
            className="star"
            style={{ color: "#fff", fontSize: "40px" }}
          />
        </span>
      </div>
    </>
  );
};

export default GlowParticle;
