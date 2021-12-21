import React from "react";

const WeekForecastEach = ({ day }) => {
  const date = day.datetime.split("-")[2];
  return (
    <p>
      {date} {day.app_min_temp}° / {day.app_max_temp}°
    </p>
  );
};

export default WeekForecastEach;
