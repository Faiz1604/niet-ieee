import React from "react";
import "./style/Contact.css";
import instagram from "./images/instagram.png"
import Tilt from "react-parallax-tilt"
export default function Contact() {
  return (
    <>
      <div className="contact-container">
        <Tilt tiltAxis={"x"} reset={true} scale={1.1} trackOnWindow={false}>
        <div className="contact-card">
          <div>
            <center><span>&#128222;</span></center>
            <span>Phone:</span>
            <span>+919988776655</span>
          </div>
          <div>
            <center><img src={instagram} alt="instagram" /></center>
            <span><a href="https://www.instagram.com/ieee.niet.sb/"target="_blank" rel="noreferrer">ieee.niet.sb</a></span>
          </div>
          <div>
          <center><span>&#128231;</span></center>
            <span>Email:</span>
            <span><a href="mailto: abc@example.com" target="_blank"rel="noreferrer"> nietieee@niet.co.in</a></span>
          </div>
          <div>
          <center><span>🗺️</span></center>
            <span>NIET Greater Noida</span>
          </div>
          <div><a href="https://www.ieee.org/"target="_blank"rel="noreferrer"> &nbsp; Visit www.ieee.org  &nbsp;</a></div>   
        </div>
        </Tilt>
      </div>
    </>
  );
}
