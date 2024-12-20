import getRandomNumber from '../utility.js';
import playGame from '../index.js';

export const questionGame = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
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

export const questionAndAnswer = () => {
  const a = getRandomNumber(1, 50);
  const b = getRandomNumber(1, 50);
  const question = `${a} ${b}`;
  const currAnswer = gcd(a, b);
  const currentAnswer = currAnswer.toString();
  return [question, currentAnswer];
};
export const greatestCommonDivisor = () => {
  playGame(questionGame, questionAndAnswer);
};
