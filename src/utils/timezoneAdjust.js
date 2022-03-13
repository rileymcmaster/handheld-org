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

export const timezoneAdjust = (weather) => {
  const { sunrise, sunset, UTC } = weather;

  if (!sunrise || !sunset || !UTC) {
    return undefined;
  }
  const sunriseFormat = +sunrise.split(":").join("");
  const sunsetFormat = +sunset.split(":").join("");
  const sunriseAdjusted = addColon(sunriseFormat + UTC);
  const sunsetAdjusted = addColon(sunsetFormat + UTC);

  return { ...weather, sunrise: sunriseAdjusted, sunset: sunsetAdjusted };
};
