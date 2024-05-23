import React from 'react';
import './hero.css';
import SpotlightNews from './News-Section/SpotlightNews';
import OldNews from './News-Section/OldNews';
import newsData from '../../Data/newsData.json';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck, faScroll, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import background from './Main-Background.jpeg';
const Hero = () => {
  const { spotlightNews, oldNews } = newsData;
  const [typeEffect] = useTypewriter({
    words: ['Annual Tech Fest', 'Career Fair', 'Art & Craft Exhibition'],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
    Cursor: true
  });
  return (
    <div className='hero'>
      <div className="main-page">
      <img src={background} alt="Main Background"/>
      <div className="about-aot">
        <span>
        Translate your <strong>vision</strong> into <strong>reality</strong>
        </span>
        <button className='about-us'>About Us
        <FontAwesomeIcon id='go' icon={faCircleArrowRight} />
        </button>
      </div>
      </div>


      <div className='news-container'>
        <div className='spotlight-container'>
          {spotlightNews.map((news) => (
  <SpotlightNews
    key={news.id}
    id={news.id}
    img={news.img}
    headline={news.headline}
    description={news.description}
  />
))}
        </div>
        <div className='more-news'>         
          <span>MORE FROM THE AOT COMMUNITY</span>
        <div className='old-news-container'>
          {oldNews.map((news) => (
          <OldNews
          key={news.id}
    id={news.id}
    img={news.img}
    headline={news.headline}
    description={news.description}
  />
))}
        </div>
        </div>
      </div>
      
      {/* Announcements Section*/}
      <div className="announcement-section">
        <h3><span>Announcements</span>
        <FontAwesomeIcon id='script-ico' icon={faScroll} />
        </h3>
          <ul className='announcement-content'>
            <li><a href="">noticeeeeeeeeeeeeeeee 00</a></li>
            <li><a href="">notice 01</a></li>
            <li><a href="">notice 02</a></li>
            <li><a href="">notice 03</a></li>
            <li><a href="">notice 04</a></li>
          </ul>

      </div>

      {/* Event Section */}

      <div className="event-section">
        <h3>{typeEffect} :<span> Upcomming Events</span> 
        <FontAwesomeIcon id='calender-ico' icon={faCalendarCheck} />
        </h3>
        <div className="event-content">
          <div className="event1 event"></div>
          <div className="event2 event"></div>
        </div>
      </div>


      {/* Fotter */}
      <div className="fotter">
        <div className="subscribe-letter">
      <span>Want more about AOT?</span>
      <span>
      Explore <a href="">more spotlights</a>, or subscribe to receive <a href="">daily or weekly doses of AOT</a> in your inbox.
      </span>
        </div>
      <button className='Subscribe'>Subscribe</button>
      </div>


    </div>
  );
};

export default Hero;
