import dayjs from "dayjs";

//returns the array of days
export const getMonth = (month = dayjs().month()) => {
  const year = dayjs().year();
  const firstDayOfMonth = dayjs().set("month", month).startOf("month").day();

  let datCounter = -firstDayOfMonth;

  return Array.from({ length: 5 }, () =>
    Array.from({ length: 7 }, () => dayjs(new Date(year, month, ++datCounter)))
  );
};
