import React from "react";
import dayjs from "dayjs";
import styled from "styled-components";

const WeekDayList = () => {
  const date = new Date();
  const currentDay = dayjs(date).format("D");
  const week = [];

  for (let i = 1; i <= 7; i++) {
    const first = date.getDate() - date.getDay() + i;
    const day = new Date(date.setDate(first));
    const dayFormat = dayjs(day).format("D");
    week.push(dayFormat);
  }

  return (
    <List>
      {week.map((day) => {
        return (
          <li key={day} className={day === currentDay ? "active" : undefined}>
            {day}
          </li>
        );
      })}
    </List>
  );
};

const List = styled.ul`
  list-style-type: none;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  /* gap: 0.2em; */

  li {
    font-size: 0.5em;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 3em;
    height: 3em;

    border: 1px solid var(--primary-colour);
    border-radius: 50%;
    filter: var(--dropshadow-desktop);
  }
  li ~ li {
    margin-left: 0.2em;
  }

  li.active {
    background: var(--primary-colour);
    color: var(--secondary-colour);
  }
`;

export default WeekDayList;
