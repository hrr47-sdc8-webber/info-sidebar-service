module.exports.turnsClockTimeIntoTotalMinutes = function(str) {
  let splitTime = str.split(':')
  return (Number(splitTime[0])*60) + (Number(splitTime[1]))
}

