export function _returnTimeAgoStamp(timestamp) {
  let timeNum;
  let timeUnit;
  const postDate = new Date(timestamp);
  const currentDate = new Date();
  const timeAgo = currentDate - postDate;
  if (timeAgo > 31536000000) {
    //year
    timeNum = Math.round(timeAgo / 31536000000);
    timeUnit = timeNum === 1 ? 'year' : 'years';
  } else if (timeAgo > 2592000000) {
    // month
    timeNum = Math.round(timeAgo / 2592000000);
    timeUnit = timeNum === 1 ? 'month' : 'months';
  } else if (timeAgo > 86400000) {
    // day
    timeNum = Math.round(timeAgo / 86400000);
    timeUnit = timeNum === 1 ? 'day' : 'days';
  } else if (timeAgo > 3600000) {
    //hour
    timeNum = Math.round(timeAgo / 3600000);
    timeUnit = timeNum === 1 ? 'hour' : 'hours';
  } //min
  else {
    timeNum = Math.round(timeAgo / 60000);
    timeUnit = timeNum === 1 ? 'min' : 'mins';
  }
  return { timeNum, timeUnit };
}
