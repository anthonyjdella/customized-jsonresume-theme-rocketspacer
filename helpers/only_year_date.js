// Months names
// Exports
module.exports = (dateString) => {
  if (!dateString) return dateString;

  const date = new Date(dateString);
  return `${date.getFullYear()}`;
};
