import React from 'react';

const Testimonials = () => {
  return (
    <section className="testimonials py-5">
      <div className="container">
        <h2 className="minecraft-title gold text-center mb-5">Player Testimonials</h2>
        <div className="row">
          <div className="col-md-4 mb-4 fade-in-element">
            <div className="card h-100">
              <div className="card-body text-center">
                <div className="mb-3">
                  <i className="fas fa-star text-warning"></i>
                  <i className="fas fa-star text-warning"></i>
                  <i className="fas fa-star text-warning"></i>
                  <i className="fas fa-star text-warning"></i>
                  <i className="fas fa-star text-warning"></i>
                </div>
                <p className="card-text">"CleanCatClient doubled my FPS and made Minecraft so much more enjoyable. The custom interface options are also amazing!"</p>
                <div className="d-flex justify-content-center align-items-center mt-3">
                  <div className="pixel-border me-3" style={{ width: "50px", height: "50px", backgroundImage: "url('https://images.unsplash.com/photo-1634580285846-374f22b48c7d')", backgroundSize: "cover", backgroundPosition: "center" }}></div>
                  <div className="text-start">
                    <h5 className="mb-0">PixelMaster99</h5>
                    <small className="text-muted">PvP Player</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4 fade-in-element">
            <div className="card h-100">
              <div className="card-body text-center">
                <div className="mb-3">
                  <i className="fas fa-star text-warning"></i>
                  <i className="fas fa-star text-warning"></i>
                  <i className="fas fa-star text-warning"></i>
                  <i className="fas fa-star text-warning"></i>
                  <i className="fas fa-star text-warning"></i>
                </div>
                <p className="card-text">"I've tried many Minecraft clients, but CleanCatClient is the best balance of performance and features. Totally worth it!"</p>
                <div className="d-flex justify-content-center align-items-center mt-3">
                  <div className="pixel-border me-3" style={{ width: "50px", height: "50px", backgroundImage: "url('https://images.unsplash.com/photo-1562229125-6d6075419a22')", backgroundSize: "cover", backgroundPosition: "center" }}></div>
                  <div className="text-start">
                    <h5 className="mb-0">BlockBuilder42</h5>
                    <small className="text-muted">Creative Builder</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4 fade-in-element">
            <div className="card h-100">
              <div className="card-body text-center">
                <div className="mb-3">
                  <i className="fas fa-star text-warning"></i>
                  <i className="fas fa-star text-warning"></i>
                  <i className="fas fa-star text-warning"></i>
                  <i className="fas fa-star text-warning"></i>
                  <i className="fas fa-star-half-alt text-warning"></i>
                </div>
                <p className="card-text">"The support team is incredible! Any issue I had was resolved quickly, and the client runs perfectly on my lower-end PC."</p>
                <div className="d-flex justify-content-center align-items-center mt-3">
                  <div className="pixel-border me-3" style={{ width: "50px", height: "50px", backgroundImage: "url('https://images.unsplash.com/photo-1587573089734-09cb69c0f2b4')", backgroundSize: "cover", backgroundPosition: "center" }}></div>
                  <div className="text-start">
                    <h5 className="mb-0">CraftQueen</h5>
                    <small className="text-muted">Survival Player</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 