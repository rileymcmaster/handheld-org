import dayjs from "dayjs";
import React from "react";
import { useQuery } from "react-query";
import styled from "styled-components";

import WeekDayList from "./WeekDayList";

const Calendar = () => {
  const date = new Date();
  const dateFormatted = dayjs(date).format("dddd MMMM D YYYY").split(" ");
  const [currentDay, currentMonth, currentDate, currentYear] = dateFormatted;

  return (
    <Wrapper>
      <WeekDayList />
      <DateContainer>
        <h3>{currentDay}</h3>
        <p>
          {currentMonth} {currentDate}
        </p>
        <p>{currentYear}</p>
      </DateContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  grid-area: calendar;
  text-align: center;
  justify-self: center;

  font-size: 1.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin-top: -3rem;
  @media (min-width: 768px) {
    margin-top: 0;
    font-size: 1.2rem;
    align-items: flex-end;
    justify-content: flex-start;
  }

  @media (min-width: 1280px) {
    font-size: 1.5rem;
  }
`;

const DateContainer = styled.div`
  margin-top: 1em;

  text-align: center;

  @media (min-width: 768px) {
    text-align: right;
  }

  h3 {
    font-size: 2em;
  }
  p {
    margin-top: 1em;
    @media (min-width: 768px) {
      margin-top: 0.3em;
    }
    font-size: 1em;
  }
  p ~ p {
  }
`;
export default Calendar;
