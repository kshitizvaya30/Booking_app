import React from 'react';
import '../../App.css';
import { Button } from '../Buttons/Button';
import './HeroSection.css';

function HeroSection() {
  let url = 'https://www.youtube.com/watch?v=j2iL9JBSCo4';
  return (
    <div className='hero-container'>
      <video src='/videos/cinema1.mp4' autoPlay loop muted />
      <h1>BOOK YOUR TICKETS NOW</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          link="/shows"
        >
          Book Tickets
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={() => { window.location.href = url; } }>
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;