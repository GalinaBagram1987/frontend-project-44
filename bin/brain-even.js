import readlineSync from 'readline-sync';

const name = readlineSync.question('May I have your name? ');
const hello = `Hello, ${name}!`;
console.log(hello);

console.log('Answer "yes" if the number is even, otherwise answer "no".');
const isEven = () => {
  for (let i = 3; i > 0; i -= 1) {
    const num = Math.ceil(Math.random() * 100);
    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer: ');
    if (num % 2 === 0 && answer === 'yes') {
      console.log('Correct!');
    } else if (num % 2 !== 0 && answer === 'no') {
      console.log('Correct!');
    } else if (num % 2 === 0 && answer === 'no') {
      console.log('"no" is wrong answer ";(". Correct answer was "yes".');
      console.log(`Let's try again, ${name}!`);
      return;
    } else if (num % 2 !== 0 && answer === 'yes') {
      console.log('"yes" is wrong answer ";(". Correct answer was "no".');
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
isEven();
export default isEven;
