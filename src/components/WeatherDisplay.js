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

  // TODOS
  // map icons to weather codes
  // should feels like be a tooltip?
  // change city

  return (
    <Wrapper>
      <Container>
        <Circle />
        <h3>{temp}°</h3>
        <p className="lohi">
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
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* flex: 1; */
  grid-area: weather;
  align-self: start;
  display: flex;
  /* flex-direction: column; */
  /* align-items: center; */

  /* justify-content: center; */
  font-size: 1rem;
  /* border: 2px solid black; */
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h3 {
    margin-top: 1em;
    font-size: 2em;
  }
  p {
    /* margin-bottom: 1em; */
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
  width: 150px;
  height: 150px;
  background: var(--primary-colour);
  border-radius: 50%;
  filter: var(--dropshadow-desktop);
`;
export default WeatherDisplay;
