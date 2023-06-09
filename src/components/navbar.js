import React from "react";

function navbar() {
  return (
    <><React.StrictMode>
        <nav className="navbar navbar-expand-lg py-3 py-lg-3 navbar-light navbar-fixed-top">
          <img id="logo" src="images/logo.png" alt="" />
          {/* hidden on mobile */}
          <a className="navbar-brand d-none d-md-block pl-2" style={{ fontSize: '1.5625rem' }} href="#">
              <span>SLUG AND PLUG</span>
          </a>
          {/* hidden on desktop */}
          <a className="navbar-brand d-md-none" href="#Home">
              <span>SLUG AND PLUG</span>
          </a>
          <button id="nav-button" className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse justify-content-end ml-auto" id="navbarNav">
              <ul className="navbar-nav">
                  <li className="nav-item">
                      <a className="nav-link" href="#team">Our Team</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href="#about">About Us</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href="#">Events</a>
                  </li>
                  <li className="nav-item d-none d-md-block">
                      <a className="nav-link" href="#Reach">Contact Us</a>
                  </li>
                  <li className="nav-item d-md-none">
                      <a className="nav-link" href="#Reach">Contact Us</a>
                  </li>
              </ul>
          </div>
      </nav>
    </React.StrictModetMode>
     );
}

export default navbar;