import React from 'react';
import { Link } from 'react-router-dom';

const LatestUpdates = () => {
  return (
    <section className="latest-updates py-5">
      <div className="container">
        <h2 className="minecraft-title emerald text-center mb-5">Latest Updates</h2>
        <div className="row">
          <div className="col-lg-4 mb-4 fade-in-element">
            <div className="update-item">
              <span className="update-version">v1.1.0</span>
              <span className="update-date ms-2">Released 2023-03-10</span>
              <h4 className="mt-2">Major Feature Update</h4>
              <p>Added new cosmetic options, performance improvements, and expanded mod compatibility.</p>
              <Link to="/updates" className="btn btn-sm btn-primary">Read More</Link>
            </div>
          </div>
          <div className="col-lg-4 mb-4 fade-in-element">
            <div className="update-item">
              <span className="update-version">v1.0.1</span>
              <span className="update-date ms-2">Released 2023-02-01</span>
              <h4 className="mt-2">Bug Fixes & Improvements</h4>
              <p>Fixed several bugs and improved overall stability and performance.</p>
              <Link to="/updates" className="btn btn-sm btn-primary">Read More</Link>
            </div>
          </div>
          <div className="col-lg-4 mb-4 fade-in-element">
            <div className="update-item">
              <span className="update-version">v1.0.0</span>
              <span className="update-date ms-2">Released 2023-01-15</span>
              <h4 className="mt-2">Initial Release</h4>
              <p>The first public release of CleanCatClient with core features and optimizations.</p>
              <Link to="/updates" className="btn btn-sm btn-primary">Read More</Link>
            </div>
          </div>
        </div>
        <div className="text-center mt-3">
          <Link to="/updates" className="minecraft-btn secondary">View All Updates</Link>
        </div>
      </div>
    </section>
  );
};

export default LatestUpdates; 