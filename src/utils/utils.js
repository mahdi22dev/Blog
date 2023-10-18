const moment = require("moment/moment");

export const dateFormater = (date) => {
  const fromatedDate = moment(date).format("MMMM Do, YYYY");
  return fromatedDate;
};
