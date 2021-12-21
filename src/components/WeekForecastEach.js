import React from "react";
import styled from "styled-components";

const WeekForecastEach = ({ day }) => {
  const date = day.datetime.split("-")[2];
  return (
    <Container>
      <DayBubble>{date}</DayBubble>
      {day.app_min_temp}° / {day.app_max_temp}°
    </Container>
  );
};

const Container = styled.p`
  display: flex;
  align-items: center;
  font-size: 0.9em;
  & ~ & {
    margin-top: 1em;
  }
`;

const DayBubble = styled.span`
  display: flex;
  font-size: 0.8em;
  justify-content: center;
  align-items: center;
  height: 2em;
  width: 2em;
  margin-right: 0.4em;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 50%;

  filter: var(--dropshadow-desktop);
`;

export default WeekForecastEach;
