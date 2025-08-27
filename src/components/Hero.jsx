import React from 'react';
import ServiceCard from './ServiceCard';
const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-content">
        <h2>Development & Integration</h2>
        <p style={{color:'#000000'}}>
          Our development and integration services cater to organisations
          looking at digital transformation and Industry 4.0. Let's work
          together to realize your business goals today.
        </p>
      </div>
      <ServiceCard />
    </section>
  );
};
export default Hero;
