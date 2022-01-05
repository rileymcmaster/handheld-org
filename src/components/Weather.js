import React from "react";
import { useQuery } from "react-query";
import styled from "styled-components";

import { fetchWeather, fetchForecast } from "../utils/fetchWeather";
import WeatherDisplay from "./WeatherDisplay";
import WeatherIcon from "./WeatherIcon";

const Weather = () => {
  const weather = useQuery("weather", fetchWeather, {
    staleTime: 10000,
    enabled: false,
  });

  const forecast = useQuery("forecast", fetchForecast, {
    staleTime: 10000,
    enabled: false,
  });

  if (!weather.isSuccess || !forecast.isSuccess) {
    return <WeatherIcon icon={"smile"} />;
  }
  if (weather.isLoading || forecast.isLoading) {
    return <p>LOADING</p>;
  }
  if (weather.isError || forecast.isLoading) {
    return <p>failed</p>;
  }

  return (
    <Wrapper>
      <WeatherDisplay weather={weather.data} forecast={forecast.data.data} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  @media (min-width: 768px) {
    grid-area: weather;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

export default Weather;
