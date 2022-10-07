import React from "react";
import "./style/Events.css";
import fouroct from "./images/4oct.jpeg";
import sevenoct from "./images/7oct.jpeg";
import eightoct from "./images/8oct.jpeg";
import eight1oct from "./images/8oct1.jpeg";
import eight2oct from "./images/8oct2.jpeg";
export default function Events() {
  return (
    <>
      <div className="body">
        <div className="events">
          <img src={eightoct} alt="" />
          <img src={eight1oct} alt="" />
          <img src={eight2oct} alt="" />
          <img src={sevenoct} alt="" />
          <img src={fouroct} alt="" />
        </div>
      </div>
    </>
  );
}
