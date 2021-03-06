import React, { useContext } from 'react';
import './Portfolio.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import budget from '../../img/budget.png';
import dravel from '../../img/dravel.png';
import food from '../../img/food.png';
import seaport from '../../img/seaport.png';
import { themeContext } from '../../Context';

const Portfolio = () => {
  const theme = useContext(themeContext);
  const { darkMode } = theme.state;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? 'white' : '' }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a
            href="https://github.com/Anny85-code/budget-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={budget} alt=" " />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="https://github.com/Anny85-code/dravel_app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={dravel} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="https://github.com/Anny85-code/food-recipe"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={food} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="https://github.com/Anny85-code/seafoodmenu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={seaport} alt="" />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
