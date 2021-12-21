import React, { useState } from "react";
import styled from "styled-components";
import ShowMoreButton from "./ShowMoreButton";
import WeekForecastEach from "./WeekForecastEach";

const WeatherDisplay = ({ weather, forecast }) => {
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
  return (
    <Wrapper>
      {/* temp icon here */}
      <Circle />
      <p>Temp {temp}°</p>
      <p>Feels like {feelsLike}°</p>
      <p>high {highTemp}°</p>
      <p>low {lowTemp}°</p>
      <ShowMoreButton handleClick={handleClick} showMore={showMore} />

      {showMore && (
        <>
          <p>{cityName}</p>
          <p>Sunrise: {sunrise}</p>
          <p>Sunset: {sunset}</p>
          <p>FOR THE WEEK</p>
          {weekForecast.map((day) => (
            <WeekForecastEach key={day.datetime} day={day} />
          ))}
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  line-height: 2;
`;
const Circle = styled.div`
  width: 200px;
  height: 200px;
  background: var(--primary-colour);
  border-radius: 50%;
`;
export default WeatherDisplay;
