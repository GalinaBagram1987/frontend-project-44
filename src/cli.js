import readlineSync from 'readline-sync';

const greetings = () => {
  const name = readlineSync.question('May I have your name? ');
  const hello = `Hello, ${name}!`;
  console.log(hello);
};
export default greetings;
