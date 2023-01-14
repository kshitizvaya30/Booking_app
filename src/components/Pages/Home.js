import React, { useEffect, useState } from 'react';
import '../../App.css';
import Cards from '../Cards/Cards';
import HeroSection from '../HeroSection/HeroSection';
import Footer from '../Footer/Footer';
import axios from 'axios';

function Home() {

  return (
    <>
      <HeroSection />
      <Cards/>
      <Footer />
    </>
  );
}

export default Home;