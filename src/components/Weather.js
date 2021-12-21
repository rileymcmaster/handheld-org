import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";

import { fetchWeather, fetchForecast } from "../utils/fetchWeather";
import WeatherDisplay from "./WeatherDisplay";

const Weather = () => {
  const weather = useQuery("weather", fetchWeather, { staleTime: 10000 });

  const forecast = useQuery("forecast", fetchForecast, { staleTime: 10000 });

  if (weather.isLoading || forecast.isLoading) {
    return <p>LOADING</p>;
  }
  if (weather.isError || forecast.isLoading) {
    return <p>failed</p>;
  }

  return (
    <WeatherDisplay weather={weather.data} forecast={forecast.data.data} />
  );
};

export default Weather;
