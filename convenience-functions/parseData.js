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

function convertForGoogleDirections(arr) {
  if (!arr.length) return;
  let buildString = 'https://www.google.com/maps/dir/?api=1&destination=';
  for (let i = 0; i < arr.length; i += 1) {
    const string = arr[i].toString().replace(/\W/g, '+');
    buildString += `${string},`;
  }
  return buildString.substring(0,buildString.length-1)
}

function convertForGoogleMaps(arr) {
  if (!arr.length) return;
  let buildString = '';
  for (let i = 0; i < arr.length; i += 1) {
    const string = arr[i].toString().replace(/\W/g, '+');
    buildString += `${string},`;
  }
  return buildString.substring(0,buildString.length-1)
}

module.exports = {
  turnsClockTimeIntoTotalMinutes,
  convertsFormOfTime,
  convertForGoogleDirections,
  convertForGoogleMaps,
};
