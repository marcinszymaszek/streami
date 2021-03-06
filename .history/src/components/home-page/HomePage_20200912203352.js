import React, { useState, useEffect } from 'react';
import Header from '../header/Header'
import Navigation from '../navigation/Navigation'
import TopMovies from '../top-movies/TopMovies'
import Pagination from '../pagination/Pagination'
import axios from 'axios';

const HomePage = () => {

  // https://itunes.apple.com/us/rss/topmovies/limit=100/json










  return (
    <div className="home-page-container">
      <Header />
      <Navigation />
      <section className="top-movies-list">
        <Movies />
        <Pagination />
      </section>
    </div>
  );
}

export default HomePage;
