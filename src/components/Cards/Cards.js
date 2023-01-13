import React, { useContext, useEffect, useState } from 'react';
import './Cards.css';
import CardItem from './CardItem';
import axios  from 'axios';
import seatContext from '../ticketBook/contex/seatContext';

function Cards() {

  const [trendingShows,setTrendingShows] = useState([""]);
  useEffect(() => {
    axios.get("http://localhost:3001/api/getShowData").then((response) => {
      setTrendingShows(response.data)
      console.log(response.data);
    });
  }, []);

  // useEffect(() => {
  //   SetTrendingShows(movies);
  //   console.log(movies)
  // }, [movies]);
  

  return (
    <div className='cards'>
      <h1>Check out these TRENDING Shows!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              // src={trendingShows[0].img_url}
              // text={trendingShows[0].name}
              // label={trendingShows[0].showTypeId}
              // path='/services'
              src=""
              text=""
              label=""
            />
            <CardItem
              // src={trendingShows[1].img_url}
              // text={trendingShows[1].name}
              // label={trendingShows[1].showTypeId}
              path='/services'
              src=""
              text="aaaaa"
              label=""
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
            src=""
            text=""
            label=""
              // src={trendingShows[2].img_url}
              // text={trendingShows[2].name}
              // label={trendingShows[2].showTypeId}
              path='/services'
            />
            <CardItem
            src=""
              text=""
              label=""
              // src={trendingShows[4].img_url}
              // text={trendingShows[4].name}
              // label={trendingShows[4].showTypeId}
              // path='/services'
            />
            <CardItem
            src=""
            text=""
            label=""
              // src={trendingShows[5].img_url}
              // text={trendingShows[5].name}
              // label={trendingShows[5].showTypeId}
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;