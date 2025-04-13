import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-lg-10 fade-in-element">
            <h1 className="minecraft-title gold mb-4">Welcome to CleanCatClient</h1>
            <p className="lead mb-5">A premium Minecraft client designed to enhance your gameplay experience with incredible features, optimizations, and customization options.</p>
            <div>
              <Link to="/download" className="minecraft-btn primary me-3 mb-3">Download Now</Link>
              <Link to="/store" className="minecraft-btn secondary mb-3">Visit Store</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 