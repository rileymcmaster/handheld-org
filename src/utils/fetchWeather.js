import { getPosition } from "./location";
import { updateWeatherForTimezone } from "./timezoneAdjust";

export const fetchWeather = async () => {
  try {
    const location = await getPosition();
    const result = await fetch(
      `${process.env.REACT_APP_WEATHERBIT_WEATHER_URL}?lat=${location.latitude}&lon=${location.longitude}&key=${process.env.REACT_APP_WEATHERBIT_API_KEY}`
    );
    const resultData = await result.json();
      
    //updates the sunrise and sunset times for local GMT offset
    const weatherResult = updateWeatherForTimezone(resultData.data[0]);
    return weatherResult;
  } catch (e) {
    throw new Error("Error fetching weather: ", e);
  }
};

export const fetchForecast = async () => {
  try {
    const location = await getPosition();

    const result = await fetch(
      `${process.env.REACT_APP_WEATHERBIT_FORECAST_URL}?lat=${location.latitude}&lon=${location.longitude}&key=${process.env.REACT_APP_WEATHERBIT_API_KEY}`
    );
    const resultData = await result.json();

    return resultData;
  } catch (e) {
    throw new Error("Error fetching forecast", e);
  }
};
