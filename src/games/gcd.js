import readlineSync from 'readline-sync';
import { greetings, questionGames, congratulations } from '../index.js';

const playerName = greetings();
questionGames('Find the greatest common divisor of given numbers.');
const greatestCommomDivisor = () => {
  for (let i = 3; i > 0; i -= 1) {
    const a = Math.ceil(Math.random() * 100);
    const b = Math.ceil(Math.random() * 100);
    console.log(`Question: ${a} ${b}`);
    const answer = readlineSync.question('Your answer: ');
    const gcd = () => {
      let x = a;
      let y = b;
      while (x !== y) {
        if (x > y) {
          x -= y;
        } else {
          y -= x;
        }
      }
      return x;
    };
    const correctAnswer = gcd();
    if (Number(answer) === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(
        `${answer}  is wrong answer ;(. Correct answer was ${correctAnswer}`
      );
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
  }
  congratulations(playerName);
};
export default greatestCommomDivisor;
