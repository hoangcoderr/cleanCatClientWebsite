import React from 'react';

const Showcase = () => {
  return (
    <section className="showcase py-5 bg-dark">
      <div className="container">
        <h2 className="minecraft-title emerald text-center mb-5">Client Showcase</h2>
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0 fade-in-element">
            <div className="minecraft-panel">
              <h3>Enhanced Gameplay</h3>
              <p>CleanCatClient offers a wide range of gameplay enhancements that improve your Minecraft experience without breaking server rules.</p>
              <ul className="mb-0">
                <li>Improved frame rates with optimized rendering</li>
                <li>Advanced lighting and shader support</li>
                <li>Custom keybinds and macros for faster gameplay</li>
                <li>Enhanced chat features and friend system</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 fade-in-element">
            <div className="minecraft-panel" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1621850920797-baa9d2ee6e93')", backgroundSize: "cover", backgroundPosition: "center", height: "300px" }}>
            </div>
          </div>
        </div>
        <div className="row align-items-center mt-5">
          <div className="col-lg-6 mb-4 mb-lg-0 order-lg-2 fade-in-element">
            <div className="minecraft-panel">
              <h3>Customizable Interface</h3>
              <p>Make Minecraft look exactly how you want with our extensive customization options.</p>
              <ul className="mb-0">
                <li>Custom HUD layouts and positioning</li>
                <li>Themed interfaces with multiple styles</li>
                <li>Inventory and hotbar customizations</li>
                <li>Motion blur and camera effects</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 order-lg-1 fade-in-element">
            <div className="minecraft-panel" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1594845222818-9097c52dabb5')", backgroundSize: "cover", backgroundPosition: "center", height: "300px" }}>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase; 