import { getPosition } from "./location";
import { timezoneAdjust } from "./timezoneAdjust";

export const fetchWeather = async () => {
  const location = await getPosition();
  const result = await fetch(
    `${process.env.REACT_APP_WEATHERBIT_WEATHER_URL}?lat=${location.latitude}&lon=${location.longitude}&key=${process.env.REACT_APP_WEATHERBIT_API_KEY}`
  );
  const resultData = await result.json();
  // response gives times assuming everyone is at GMT 0000
  // they also don't include the local GMT offset
  // so I need the date to get the GMT offset
  const currentDate = new Date();
  const timezoneFormatted = currentDate.toString().match(/([-\+][0-9]+)\s/)[1];
  const resultDataWithUTC = { ...resultData.data[0], UTC: +timezoneFormatted };
  //updates the sunrise and sunset times for local GMT offset
  const timezoneCompensation = timezoneAdjust(resultDataWithUTC);

  return timezoneCompensation;
};

export const fetchForecast = async () => {
  const location = await getPosition();

  const result = await fetch(
    `${process.env.REACT_APP_WEATHERBIT_FORECAST_URL}?lat=${location.latitude}&lon=${location.longitude}&key=${process.env.REACT_APP_WEATHERBIT_API_KEY}`
  );
  const resultData = await result.json();

  return resultData;
};
