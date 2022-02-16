import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import AnimateHeight from "react-animate-height";

import ShowMoreButton from "./ShowMoreButton";
import WeekForecastEach from "./WeekForecastEach";

const WeatherDisplay = ({ weather, forecast }) => {
  const [showMore, setShowMore] = useState(false);

  const [height, setHeight] = useState(0);

  const toggleShowMore = () => setHeight(height === 0 ? "auto" : 0);

  const {
    temp,
    app_temp: feelsLike,
    city_name: cityName,
    sunrise,
    sunset,
  } = weather;

  const { max_temp: highTemp, min_temp: lowTemp } = forecast[0];

  const weekForecast = forecast.filter((day, index) => index > 0 && index <= 5);
  const handleClick = () => {
    toggleShowMore();
    setShowMore(!showMore);
  };

  // TODOS
  // be able to change city

  return (
    <Container>
      <h3 aria-label="current temperature">{temp}°</h3>
      <p aria-label="low and high temperature for the day" className="lohi">
        {lowTemp}° / {highTemp}°
      </p>
      <ShowMoreButton handleClick={handleClick} showMore={showMore} />
      <>
        <AnimateHeight duration={500} height={height}>
          <ShowMoreContainer>
            <p>{cityName}</p>
            <p className="feels">feels like {feelsLike}°</p>
            <p>Sunrise: {sunrise}</p>
            <p>Sunset: {sunset}</p>
            <div className="forecast-container">
              {weekForecast.map((day) => (
                <WeekForecastEach key={day.datetime} day={day} />
              ))}
            </div>
          </ShowMoreContainer>
        </AnimateHeight>
      </>
    </Container>
  );
};

const fadeIn = keyframes`
from {
  opacity: 0
}
to {
  opacity: 1;
}
`;

const Container = styled.div`
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  transition: all 2s;
  animation: ${fadeIn} 2s ease;
  @media (min-width: 768px) {
    justify-content: flex-start;
    min-width: 150px;
    padding-bottom: 3rem;
  }
  h3 {
    margin-top: 1em;
    font-size: 2em;
  }
  p {
  }
  p.feels {
    margin-top: 1em;
    margin-bottom: 1em;
  }

  p.lohi {
    margin-top: 1em;
    font-size: 1.3em;
  }

  .forecast-container {
    margin-top: 1em;
  }
`;

const ShowMoreContainer = styled.div`
  text-align: center;
  padding-bottom: 5rem;
  @media (min-width: 768px) {
    padding-bottom: 0;
  }
`;
export default WeatherDisplay;
