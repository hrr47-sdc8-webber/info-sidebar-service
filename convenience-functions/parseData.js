function turnsClockTimeIntoTotalMinutes(str) {
  const splitTime = str.split(':');
  return (Number(splitTime[0]) * 60) + (Number(splitTime[1]));
}

function convertsFormOfTime(str) {
  const splitTime = str.split(':');
  if (Number(splitTime[0]) > 12) {
    splitTime[0] = `${Number(splitTime[0] - 12)}`;
    return `${splitTime[0]}:${splitTime[1]} PM`;
  // eslint-disable-next-line no-else-return
  } else if (Number(splitTime[0]) === 12) {
    return `${splitTime[0]}:${splitTime[1]} PM`;
  } else if (Number(splitTime[0]) === 0) {
    return `12:${splitTime[1]} AM`;
  } else {
    return `${splitTime[0]}:${splitTime[1]} AM`;
  }
}

module.exports = {
  turnsClockTimeIntoTotalMinutes,
  convertsFormOfTime
};
