import { React, useEffect } from "react";
import "./style/Home.css";
import instagram from "./images/instagram.png"
import linkedin from "./images/linkedin.png"
import twitter from "./images/twitter.png"
import ieeeImage from "./images/slideImage1.jpg";
import roboTech from "./images/robotech.webp";
import nietGroup from "./images/nietgrp.jpg";
export default function Home() {
  useEffect(() => {
    let slideIndex = 0;
    showSlides();
    function showSlides() {
      let i;
      let slides = document.getElementsByClassName("slide-image");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1;
      }
      slides[slideIndex - 1].style.display = "block";
      setTimeout(showSlides, 10000); // Change image every 2 seconds
    }
  });
  return (
    <>
      <div>
        <header>
          <div className="slideShow">
            <div className="slide-image">
              <img className="sliddingImage fade" src={ieeeImage} alt="slideimage" />
            </div>
            <div className="slide-image">
              <img className="sliddingImage fade" src={roboTech} alt="slideimage" />
            </div>
            <div className="slide-image">
              <img className="sliddingImage fade" src={nietGroup} alt="slideimage" />
            </div>
          </div>
        </header>
        <body>
          <div className="container">
            <div className="intro-text">
              <p>
                <b>
                IEEE and its members inspire a global community through highly-cited publications, conferences, technology standards, and professional and educational activities.
                </b>
                <p>
                  <h3 className="highlight-text">IEEE Advancing Technology for Humanity</h3><b>A statement from the President, Past-President, and President-Elect of IEEE:</b> <br />
                  The IEEE and our members around the world support the global pursuit of peace.
                </p>
              </p>
              <div className="reach">
                <div className="members">
                  <a href="https://www.ieee.org/membership/index.html" target="_blank" rel="noreferrer"> +400,000  members</a>
                  {/* eslint-disable-next-line  */}
               
                </div>
                <div className="articles">
                  <a href="https://ieeexplore.ieee.org/Xplore/home.jsp" target="_blank" rel="noreferrer">+5 million articles </a>
                  {/* eslint-disable-next-line  */}
                
                </div>
                <div className="confrences">
                  <a href="https://www.ieee.org/conferences/index.html" target="_blank" rel="noreferrer">Over 2,000 conferences</a>
                  {/* eslint-disable-next-line  */}
                
                </div>
              </div>
            </div>
            <div className="collaboration">
              <div className="collaboration-grid">
                <div className="ieee-ceo">
                  <p>
                    <h4 className="bg-primary highlight-text">Ray Liu, 2022 IEEE President and CEO</h4>
                    <span>
                    Follow Ray Liu on social media to get updates from across IEEE, your professional home. He’ll be highlighting different initiatives and products. <br />
                    <a href="https://twitter.com/ieeepresident"> <img src={twitter} alt="twitter" style={{marginRight:"10px"}} /></a>
                    <a href="https://www.linkedin.com/showcase/ieeepresident"> <img src={instagram} alt="instagram" style={{marginRight:"10px"}}/></a>
                    <a href="https://www.linkedin.com/showcase/ieeepresident"> <img src={linkedin} alt="linked" style={{marginRight:"10px"}} /></a>
                    </span>
                  </p>
                </div>
                <div className="niet">
                  <p>
                    <h4 className="bg-primary highlight-text">NIET GREATER NOIDA</h4>
                    <span>
                    As the first private educational institution in Uttar Pradesh to be granted "autonomous" status by the UGC, we design our own curriculum based on the needs and trends in the industry – enabling students for better employment opportunities around the world. <br />
                    <a href="https://twitter.com/niet_grnoida"> <img src={twitter} alt="twitter" style={{marginRight:"10px"}}/></a>
                    <a href="https://www.instagram.com/nietgreaternoida/?hl=hi"> <img src={instagram} alt="instagram" style={{marginRight:"10px"}}/></a>
                    <a href="https://in.linkedin.com/school/noida-institute-of-engineering-&-technology/"> <img src={linkedin} alt="linkedin"style={{marginRight:"10px"}} /></a>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </body>
        <section className="footer"></section>
      </div>
    </>
  );
}
