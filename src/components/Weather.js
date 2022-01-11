import React from "react";
import { useQuery } from "react-query";
import styled from "styled-components";

import { fetchWeather, fetchForecast } from "../utils/fetchWeather";
import WeatherDisplay from "./WeatherDisplay";
import WeatherIcon from "./WeatherIcon";

const Weather = () => {
  const weather = useQuery("weather", fetchWeather, {
    staleTime: 10000,
    // enabled: false,
  });

  const forecast = useQuery("forecast", fetchForecast, {
    staleTime: 10000,
    // enabled: false,
  });

  // if (!weather.isSuccess || !forecast.isSuccess) {
  //   return (
  //     <Wrapper>
  //       <WeatherIcon icon={"smile"} />
  //     </Wrapper>
  //   );
  // }
  // if (weather.isLoading || forecast.isLoading) {
  //   return <p>LOADING</p>;
  // }
  // if (weather.isError || forecast.isLoading) {
  //   return <p>failed</p>;
  // }

  return (
    <Wrapper>
      {/* <Circle /> */}
      <WeatherIcon
        loading={weather.isLoading || forecast.isLoading}
        icon={weather?.data?.weather}
        weather={weather?.data}
      />
      {weather.isSuccess && forecast.isSuccess && (
        <WeatherDisplay weather={weather.data} forecast={forecast.data.data} />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;

  @media (min-width: 768px) {
    min-width: 20vw;
    width: calc(100 / 3) vw;
    grid-area: weather;
    justify-content: center;
    align-items: flex-start;
  }
`;

const Circle = styled.div`
  width: 7rem;
  height: 7rem;
  background: var(--primary-colour);
  border-radius: 50%;
  filter: var(--dropshadow-desktop);
  margin: auto;
`;

export default Weather;
