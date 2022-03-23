import React from "react";
const Index = () => {
  return (
    <section id="contact">
      <div className="contact container">
        <div>
          <h1 className="section-title">
            Contact <span>Info</span>
          </h1>
        </div>

        {/* LEAVES ANIMATION SECTION */}
        <div className="set">
          <div>
            <img src="leaves1.png" alt="leave" />
          </div>
          <div>
            <img src="leaves2.png" alt="leave" />
          </div>
          <div>
            <img src="leaves3.png" alt="leave" />
          </div>
          <div>
            <img src="leaves4.png" alt="leave" />
          </div>
          <div>
            <img src="leaves1.png" alt="leave" />
          </div>
          <div>
            <img src="leaves2.png" alt="leave" />
          </div>
          <div>
            <img src="leaves3.png" alt="leave" />
          </div>
          <div>
            <img src="leaves4.png" alt="leave" />
          </div>
        </div>

        {/* END LEAVES SECTION */}

        <div className="contact-items">
          <div className="contact-item">
            <i className="fa fa-phone icon fa-2x"></i>
            <div className="contact-info">
              <h1>Phone</h1>
              <h2>+254 742 769200</h2>
            </div>
          </div>
          <div className="contact-item">
            <i className="fa fa-envelope-o icon fa-2x"></i>
            <div className="contact-info">
              <h1>Email</h1>
              <h2>duhnycan@gmail.com</h2>
            </div>
          </div>
          <div className="contact-item">
            <i className="fa fa-map-marker icon fa-2x aria='true'"></i>
            <div className="contact-info">
              <h1>Address</h1>
              <h2>Po.Box.1215-90100</h2>
            </div>
          </div>
          <a href="youtube.com" className="contact-item">
            <i className="fa fa-map-marker icon fa-2x aria='true'"></i>
            <div style={{ zIndex: "10000" }} className="contact-info">
              <button className="btn btn-success btn-sm">Message Me</button>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Index;
