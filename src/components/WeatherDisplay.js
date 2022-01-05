import React, { useEffect, useState } from "react";
import styled from "styled-components";

import useMediaQuery from "../utils/useMediaQuery";
import ShowMoreButton from "./ShowMoreButton";
import WeekForecastEach from "./WeekForecastEach";

const WeatherDisplay = ({ weather, forecast }) => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [showMore, setShowMore] = useState(false);

  const {
    temp,
    app_temp: feelsLike,
    city_name: cityName,
    sunrise,
    sunset,
  } = weather;

  const { high_temp: highTemp, low_temp: lowTemp } = forecast[0];

  const weekForecast = forecast.filter((day, index) => index > 0 && index <= 5);
  const handleClick = () => {
    setShowMore(!showMore);
  };

  // TODOS
  // map icons to weather codes
  // should feels like be a tooltip?
  // change city

  return (
    <Container>
      <Circle />
      <h3 aria-label="current temperature">{temp}°</h3>
      <p aria-label="low and high temperature for the day" className="lohi">
        {lowTemp}° / {highTemp}°
      </p>
      <ShowMoreButton handleClick={handleClick} showMore={showMore} />

      {showMore && (
        <>
          <p>{cityName}</p>
          <p className="feels">feels like {feelsLike}°</p>
          <p>Sunrise: {sunrise}</p>
          <p>Sunset: {sunset}</p>
          <div className="forecast-container">
            {weekForecast.map((day) => (
              <WeekForecastEach key={day.datetime} day={day} />
            ))}
          </div>
        </>
      )}
    </Container>
  );
};

const Container = styled.div`
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  min-width: 150px;
  padding-bottom: 3rem;
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

const Circle = styled.div`
  width: 7rem;
  height: 7rem;
  background: var(--primary-colour);
  border-radius: 50%;
  filter: var(--dropshadow-desktop);
`;
export default WeatherDisplay;
