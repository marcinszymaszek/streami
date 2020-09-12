import React from 'react';
import Header from '../header/Header'
import Navigation from '../navigation/Navigation'

const HomePage = () => {
  return (
    <div className="home-page-container">
      <Header />
      <Navigation />
      <div style="height: 500px;"></div>
    </div>
  );
}

export default HomePage;
