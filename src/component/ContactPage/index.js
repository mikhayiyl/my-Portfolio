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

        {/* FLY ANIMATION SECTION */}
        <div className="set">
          <div>
            <img className="png" src="fly.png" alt="butterfly" />
          </div>
          <div>
            <img className="png" src="fly1.png" alt="butterfly" />
          </div>
          <div>
            <img className="png" src="fly3.png" alt="butterfly" />
          </div>
          <div>
            <img className="png" src="fly4.png" alt="butterfly" />
          </div>
          <div>
            <img className="png" src="fly5.png" alt="butterfly" />
          </div>
          <div>
            <img className="png" src="fly1.png" alt="butterfly" />
          </div>
          <div>
            <img className="png" src="fly3.png" alt="butterfly" />
          </div>
          <div>
            <img className="png" src="fly4.png" alt="butterfly" />
          </div>
        </div>

        {/* END FLY SECTION */}

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
        </div>
      </div>
    </section>
  );
};

export default Index;
