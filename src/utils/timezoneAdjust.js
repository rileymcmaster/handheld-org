export const updateWeatherForTimezone = (weather) => {
  const {  sunrise, sunset } = weather;
  if (!sunrise || !sunset) return undefined;


  const sunriseAdjusted = adjustTimeForTimezone(sunrise);
  const sunsetAdjusted = adjustTimeForTimezone(sunset);
  return { ...weather, sunrise: sunriseAdjusted, sunset: sunsetAdjusted };
};

export const adjustTimeForTimezone = (time) => {
  if (!time) return undefined;

  const timezoneOffsetMins = +new Date().getTimezoneOffset() / 60;
  const timeSplit = time.split(":");
  
  //update only the hour
  timeSplit[0] = timeSplit[0] - timezoneOffsetMins;
  const adjustedTimeJoined = timeSplit.join("");
  const adj5 = addColon(adjustedTimeJoined);
  return adj5;
};

export const addColon = (time) => {
  const str = time.toString();
  switch (str.length) {
    case 3:
      return `${str.substr(0, 1)}:${str.substr(1, 3)}`;
    case 4:
      return `${str.substr(0, 2)}:${str.substr(2, 3)}`;
    default:
      return str;
  }
};
