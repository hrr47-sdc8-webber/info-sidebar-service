function turnsClockTimeIntoTotalMinutes(str) {
  const splitTime = str.split(':');
  return (Number(splitTime[0]) * 60) + (Number(splitTime[1]));
}

function convertsFormOfTime(clockTimeWithAColon) {
  const splitTime = clockTimeWithAColon.split(':');
  if (Number(splitTime[0]) > 12) {
    splitTime[0] = `${Number(splitTime[0] - 12)}`;
    return `${splitTime[0]}:${splitTime[1]} PM`;
  }

  if (Number(splitTime[0]) === 12) {
    return `${splitTime[0]}:${splitTime[1]} PM`;
  }

  if (Number(splitTime[0]) === 0) {
    return `12:${splitTime[1]} AM`;
  }

  return `${splitTime[0]}:${splitTime[1]} AM`;
}

function convertForGoogleDirections(arr) {
  if (!arr.length) return null;
  let buildString = 'https://www.google.com/maps/dir/?api=1&destination=';
  for (let i = 0; i < arr.length; i += 1) {
    const string = arr[i].toString().replace(/\W/g, '+');
    buildString += `${string},`;
  }
  return buildString.substring(0,buildString.length - 1);
}

function convertForGoogleMaps(arr) {
  if (!arr.length) return null;
  let buildString = '';
  for (let i = 0; i < arr.length; i += 1) {
    const string = arr[i].toString().replace(/\W/g, '+');
    buildString += `${string},`;
  }
  return buildString.substring(0,buildString.length - 1);
}

function determinesExpense(num) {
  if (num < 50) return '$';
  if (num < 125) return '$$';
  if (num < 250) return '$$$';
  if (num < 500) return '$$$$';
  return '$$$$$';
}

module.exports = {
  turnsClockTimeIntoTotalMinutes,
  convertsFormOfTime,
  convertForGoogleDirections,
  convertForGoogleMaps,
  determinesExpense,
};
