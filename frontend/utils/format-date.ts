// create function to formate date like this Sunday, 20 Nov 2022

export function formatDate(date?: any, timeRequired?: any, needDay?: boolean) {
  // date is 2022-12-04 convert it to date object

  if (!date) return "";
  date = new Date(date);
  const day = date.getDay();
  const month = date.getMonth();
  const year = date.getFullYear();
  const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
  const minutes =
    date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  const seconds =
    date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();

  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  if (timeRequired) {
    return `${date.getDate()} ${
      monthNames[month]
    }, ${hours}:${minutes}:${seconds}`;
  } else {
    return `${needDay ? dayNames[day] + ", " : ""}${date.getDate()} ${
      monthNames[month]
    } ${year}`;
  }
}

// Path: src\utils\functions\format-date.ts
