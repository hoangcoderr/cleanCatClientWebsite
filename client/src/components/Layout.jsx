import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark sticky-top">
        <div className="container">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img src="/static/svg/logo.svg" alt="CleanCatClient Logo" height="40" className="me-2" />
            CleanCatClient
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/download">Download</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/store">Store</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/updates">Updates</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/donate">Donate</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">Register</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link cart-icon position-relative" to="#" id="cart-toggle">
                  <i className="fas fa-shopping-cart"></i>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger cart-count">
                    0
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main>
        {children}
      </main>

      <footer className="mt-5">
        <div className="container py-4">
          <div className="row">
            <div className="col-md-4 mb-4 mb-md-0">
              <h5 className="mb-4">CleanCatClient</h5>
              <p>A premium Minecraft client designed to enhance your gameplay experience with incredible features and optimizations.</p>
              <div className="social-links mt-3">
                <a href="#" target="_blank"><i className="fab fa-discord"></i></a>
                <a href="#" target="_blank"><i className="fab fa-youtube"></i></a>
                <a href="#" target="_blank"><i className="fab fa-twitter"></i></a>
                <a href="#" target="_blank"><i className="fab fa-github"></i></a>
              </div>
            </div>
            <div className="col-md-2 mb-4 mb-md-0">
              <h5 className="mb-4">Links</h5>
              <div className="footer-links">
                <Link to="/">Home</Link>
                <Link to="/download">Download</Link>
                <Link to="/store">Store</Link>
                <Link to="/updates">Updates</Link>
                <Link to="/donate">Donate</Link>
              </div>
            </div>
            <div className="col-md-2 mb-4 mb-md-0">
              <h5 className="mb-4">Account</h5>
              <div className="footer-links">
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
              </div>
            </div>
            <div className="col-md-4">
              <h5 className="mb-4">Newsletter</h5>
              <p>Subscribe to our newsletter to receive the latest updates and news.</p>
              <form>
                <div className="input-group">
                  <input type="email" className="form-control" placeholder="Your email" required />
                  <button className="btn btn-primary" type="submit">Subscribe</button>
                </div>
              </form>
            </div>
          </div>
          <hr className="my-4" />
          <div className="row">
            <div className="col-md-6 mb-3 mb-md-0">
              <p className="mb-0">© 2023 CleanCatClient. All rights reserved.</p>
            </div>
            <div className="col-md-6 text-md-end">
              <a href="#" className="me-3">Terms of Service</a>
              <a href="#" className="me-3">Privacy Policy</a>
              <a href="#">Contact Us</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Layout; 