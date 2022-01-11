import daysOfWeek from "../data/daysOfWeek";

const getDayOfWeek = (date) => {
  const indexDayOfWeek = new Date(date).getDay();
  const dayOfWeek = daysOfWeek[indexDayOfWeek];
  return dayOfWeek;
};

export default getDayOfWeek;
