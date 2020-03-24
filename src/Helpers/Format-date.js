const FormatDate = (date) => {
  const getDate = new Date(date);
  return `
    ${getDate.toLocaleString('default', { month: 'long' })} 
    ${getDate.getUTCDate()} 
    ${getDate.getFullYear()}
    `;
};
export default FormatDate;
