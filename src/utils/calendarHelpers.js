import dayjs from "dayjs";

export const getDayOfWeek = (date) => {
  const formattedDay = dayjs(date).format("dddd");

  return formattedDay !== "Invalid Date" ? formattedDay : undefined;
};

export const generateWeekArray = () => {
  const week = [];
  const date = new Date();
  const currentDayOfWeekIndex = date.getDay();
  // JS wants sunday to be the first day
  // We want Monday as the first day
  // if Date is Sunday, it will return the "previous" week
  const currentDateNum =
    currentDayOfWeekIndex === 0 ? date.getDate() - 7 : date.getDate();
  const firstDayOfWeek = currentDateNum - currentDayOfWeekIndex;

  for (let i = 1; i <= 7; i++) {
    const newDate = new Date(date.setDate(firstDayOfWeek + i));
    const newDayOfWeek = getDayOfWeek(newDate);
    const newDateFormat = dayjs(newDate).format("D");
    week.push({ date: newDateFormat, day: newDayOfWeek });
  }

  return week;
};
