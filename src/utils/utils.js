const moment = require("moment/moment");

export const dateFormater = (date) => {
  console.log(date);
  const fromatedDate = moment(date).format("MMMM Do, YYYY");
  console.log(fromatedDate);
  return fromatedDate;
};
