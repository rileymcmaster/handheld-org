import React from "react";
import styled from "styled-components";

import getDayOfWeek from "../utils/getDayOfWeek";

const WeekForecastEach = ({ day }) => {
  const date = day.datetime.split("-")[2];

  const dayOfWeek = getDayOfWeek(day.datetime);

  return (
    <Container>
      <DayBubble data-tip={dayOfWeek}>{date}</DayBubble>
      {day.app_min_temp}° / {day.app_max_temp}°
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.9em;
  & ~ & {
    margin-top: 1em;
  }
`;

const DayBubble = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1em;
  margin-right: 1em;
  border-bottom: 1px solid var(--primary-colour);
  filter: var(--dropshadow-desktop);

  @media (min-width: 768px) {
    font-size: 0.8em;
    margin-right: 0.6em;
    height: 2em;
    width: 2em;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 50%;
  }
`;

export default WeekForecastEach;
