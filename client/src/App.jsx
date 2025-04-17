import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Features from './components/Features';
import Showcase from './components/Showcase';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import LatestUpdates from './components/LatestUpdates';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Store from './components/store/Store';
import Admin from './components/admin/Admin';
import Download from './components/Download';
import Donate from './components/Donate';
import Profile from './components/Profile';
import Checkout from './components/Checkout';
import Updates from './components/Updates';

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <Showcase />
      <Testimonials />
      <CTA />
      <LatestUpdates />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/store" element={<Store />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/download" element={<Download />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/updates" element={<Updates />} /> 
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;

