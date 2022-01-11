import React from "react";
import dayjs from "dayjs";
import styled from "styled-components";
import ReactTooltip from "react-tooltip";

import getDayOfWeek from "../utils/getDayOfWeek";

const WeekDayList = () => {
  const date = new Date();
  const currentDay = dayjs(date).format("D");
  const week = [];

  for (let i = 1; i <= 7; i++) {
    const first = date.getDate() - date.getDay() + i;
    const newDate = new Date(date.setDate(first));
    const dayOfWeek = getDayOfWeek(newDate);
    const dateFormat = dayjs(newDate).format("D");
    week.push({ date: dateFormat, day: dayOfWeek });
  }

  return (
    <List>
      {week.map((day) => {
        return (
          <li
            key={day.date}
            className={day.date === currentDay ? "active" : undefined}
            data-tip={day.day}
          >
            {day.date}
          </li>
        );
      })}
      <ReactTooltip place="bottom" />
    </List>
  );
};

const List = styled.ul`
  list-style-type: none;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  li {
    font-size: 0.5em;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 3em;
    height: 3em;
    user-select: none;
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
