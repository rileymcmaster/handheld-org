import dayjs from "dayjs";
import React from "react";
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
  /* flex: 1; */
  text-align: center;
  font-size: 1.5rem;
`;

const DateContainer = styled.div`
  margin-top: 1em;
  text-align: right;

  h3 {
    font-size: 2em;
    margin-bottom: 0.3em;
  }
  p {
    font-size: 1em;
  }
  p ~ p {
    margin-top: 0.2em;
  }
`;
export default Calendar;
