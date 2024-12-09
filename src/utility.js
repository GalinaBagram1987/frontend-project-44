const isRandomNumber = (min, max) => {
  const result = Math.ceil((Math.random() * (max - min) + min));
  return result;
};
export default isRandomNumber;
