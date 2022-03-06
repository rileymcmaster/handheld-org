import React from "react";
import dayjs from "dayjs";
import styled from "styled-components";
import ReactTooltip from "react-tooltip";

import { generateWeekArray } from "../../utils/calendarHelpers";

const WeekDayList = () => {
  const date = new Date();
  const currentDay = dayjs(date).format("D");
  const week = generateWeekArray(date);

  return (
    <List>
      {week.map((day) => {
        return (
          <React.Fragment key={day.date}>
            <li
              className={day.date === currentDay ? "active" : undefined}
              data-tip={day.day}
              data-for={day.day}
            >
              {day.date}
            </li>
            <ReactTooltip
              id={day.day}
              place="bottom"
              effect="solid"
              type="dark"
            />
          </React.Fragment>
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
