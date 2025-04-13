import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Features from './components/Features';
import Showcase from './components/Showcase';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import LatestUpdates from './components/LatestUpdates';

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
          {/* Add other routes here */}
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;

