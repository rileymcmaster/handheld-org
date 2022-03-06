import daysOfWeek from "../data/daysOfWeek";
import dayjs from "dayjs";

export const getDayOfWeek = (date) => {
  const dateFormatted = date.toString().split("-").join("/");
  const indexDayOfWeek = new Date(dateFormatted).getDay();
  const dayOfWeek = daysOfWeek[indexDayOfWeek];
  return dayOfWeek;
};

export const generateWeekArray = (date) => {
  const week = [];

  for (let i = 1; i <= 7; i++) {
    const getDay = date.getDay();
    //JS wants sunday to be the first day
    //need to account for this to display Monday as the first day.
    const getDate = getDay === 0 ? date.getDate() - 7 : date.getDate();
    const first = getDate - getDay + i;
    const newDate = new Date(date.setDate(first));
    const dayOfWeek = getDayOfWeek(newDate);
    const dateFormat = dayjs(newDate).format("D");
    week.push({ date: dateFormat, day: dayOfWeek });
  }
  return week;
};
