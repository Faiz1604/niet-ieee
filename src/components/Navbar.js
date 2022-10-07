import {React} from "react";
import branchLogo from "./images/branch logo.jpeg";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-md bg-primary fixed-top">
        <a className="navbar-brand brand" href="/">
          <img className="mx-1"
            src={branchLogo} width="60px"
            alt="branch logo"
            height="45px"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav mx-2">
            <li className="nav-item">
              <a href="/" className="nav-link">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a href="/about" className="nav-link">
                About NIET-IEEE
              </a>
            </li>
            <li className="nav-item">
              <a href="/events" className="nav-link">
                Events
              </a>
            </li>
            <li className="nav-item">
              <a href="/contact" className="nav-link">
                Contact-Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
