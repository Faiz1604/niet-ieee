import React from "react";
import "./style/Footer.css";
import instagram from "./images/instagram.png";
import linkedin from "./images/linkedin.png";
export default function Footer() {
  return (
    <>
      <div>
        <div className="container-fluid">
          <div className="heading">
            <h1>NIET-IEEE</h1>
            <p>
              Contact Us For Enquiry
            </p>
          </div>

          <div className="contact">
            <div className="free-booking">
              <h3>Fill This Form For Any Enquiry.</h3>
              <form action="#" className="border-top border-warning">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="form-control "
                    name="name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="form-control "
                    name="email"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    className="form-control"
                    name="phone"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    className="form-control"
                    name="message"
                    required
                  ></textarea>
                </div>
                <div className="form-group">
                  <input type="submit" className="form-control my-3" />
                </div>
              </form>
            </div>
            <div className="talk">
              <h3>Contact</h3>
              <p>
                <span>Phone No:</span>
                <span>+919988776655</span>
                <br />
                Nietgrnoida@niet.co.in
              </p>
              <address>Noida Institute Of Engineering And Technology (NIET) <br />Greater Noida (U.P)</address>
            </div>
          </div>
          <div className="social-logo">
            <span>
              <a href="https://www.instagram.com/ieee.niet.sb/" target="_blank" rel="noreferrer">
                <img src={instagram} alt="instagram" />
              </a>
            </span>
            <span>
              <a href="https://in.linkedin.com/school/noida-institute-of-engineering-&-technology/" target="_blank" rel="noreferrer">
                <img src={linkedin} alt="linkedin" />
              </a>
            </span>
          </div>
          <div className="lower-logo">
            <img
              src="https://www.niet.co.in/images/logo.svg"
              alt="logo"
            />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/IEEE_logo.svg/2560px-IEEE_logo.svg.png" alt="IEEE Logo" />
          </div>
        </div>
      </div>
    </>
  );
}
