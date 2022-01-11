import React from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import useMediaQuery from "../utils/useMediaQuery";

import { fetchWeather, fetchForecast } from "../utils/fetchWeather";
import WeatherDisplay from "./WeatherDisplay";
import WeatherIcon from "./WeatherIcon";

const Weather = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const weather = useQuery("weather", fetchWeather, {
    // staleTime: 10000,
    // enabled: false,
  });

  const forecast = useQuery("forecast", fetchForecast, {
    staleTime: 10000,
    // enabled: false,
  });

  return (
    <Wrapper>
      <WeatherIcon isDesktop={isDesktop} data={weather} />
      {weather.isSuccess && forecast.isSuccess && (
        <WeatherDisplay weather={weather.data} forecast={forecast.data.data} />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  @media (min-width: 768px) {
    min-width: 20vw;
    width: calc(100 / 3) vw;
    grid-area: weather;
    justify-content: center;
    align-items: flex-start;
  }
`;

export default Weather;
