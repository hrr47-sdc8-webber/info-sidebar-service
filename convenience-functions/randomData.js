module.exports.generateScore = function () {
  return Number((Math.random() * 5).toString().slice(0,3))
}

module.exports.openingHours = function() {
  let openingMinutes = ['30','00']
  let openingHour = (Math.floor((Math.random() * 6)) + 6).toString();
  let randomOneOrZero = Math.round((Math.random() * 1))
  return `${openingHour}:${openingMinutes[randomOneOrZero]}`
}

module.exports.closingHours = function() {
  let closingMinutes = ['30','00']
  let closingHour = (Math.floor((Math.random() * 6)) + 14).toString();
  let randomOneOrZero = Math.round((Math.random() * 1))
  return `${closingHour}:${closingMinutes[randomOneOrZero]}`
}