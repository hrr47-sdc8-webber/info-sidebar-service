module.exports.generateScore = () => Number((Math.random() * 5).toString().slice(0, 3));

module.exports.openingHours = () => {
  const openingMinutes = ['30', '00'];
  const openingHour = (Math.floor((Math.random() * 6)) + 6).toString();
  const randomOneOrZero = Math.round((Math.random() * 1));
  return `${openingHour}:${openingMinutes[randomOneOrZero]}`;
};

module.exports.closingHours = () => {
  const closingMinutes = ['30', '00'];
  const closingHour = (Math.floor((Math.random() * 6)) + 14).toString();
  const randomOneOrZero = Math.round((Math.random() * 1));
  return `${closingHour}:${closingMinutes[randomOneOrZero]}`;
}