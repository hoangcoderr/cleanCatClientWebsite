import React from 'react';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="cta py-5" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1648830779899-45dcc4cc6ea6')", backgroundSize: "cover", backgroundPosition: "center", position: "relative" }}>
      <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.7)" }}></div>
      <div className="container position-relative">
        <div className="row justify-content-center text-center">
          <div className="col-lg-8 fade-in-element">
            <h2 className="minecraft-title diamond mb-4">Ready to Transform Your Minecraft Experience?</h2>
            <p className="lead mb-5">Join thousands of satisfied players and take your Minecraft gameplay to the next level with CleanCatClient.</p>
            <div>
              <Link to="/download" className="minecraft-btn primary me-3 mb-3">Download Now</Link>
              <Link to="/store" className="minecraft-btn gold mb-3">Premium Features</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA; 