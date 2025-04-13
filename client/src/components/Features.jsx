import React from 'react';

const Features = () => {
  return (
    <section className="features py-5">
      <div className="container">
        <h2 className="minecraft-title diamond text-center mb-5">Featured Benefits</h2>
        <div className="row">
          <div className="col-md-4 mb-4 fade-in-element">
            <div className="feature-box">
              <div className="text-center mb-3">
                <i className="fas fa-tachometer-alt fa-3x text-primary"></i>
              </div>
              <h3 className="text-center">Performance Boost</h3>
              <p>Experience Minecraft with significantly improved FPS and reduced lag. Our client is optimized for maximum performance.</p>
            </div>
          </div>
          <div className="col-md-4 mb-4 fade-in-element">
            <div className="feature-box">
              <div className="text-center mb-3">
                <i className="fas fa-paint-brush fa-3x text-primary"></i>
              </div>
              <h3 className="text-center">Custom Interfaces</h3>
              <p>Personalize your game with customizable HUDs, menus, and visual effects to match your unique style.</p>
            </div>
          </div>
          <div className="col-md-4 mb-4 fade-in-element">
            <div className="feature-box">
              <div className="text-center mb-3">
                <i className="fas fa-shield-alt fa-3x text-primary"></i>
              </div>
              <h3 className="text-center">Anti-Cheat Compatible</h3>
              <p>Enjoy enhanced features while staying compliant with major server anti-cheat systems.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features; 