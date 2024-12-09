import isRandomNumber from '../utility.js';
import playGame from '../index.js';

export const questionGame = 'Find the greatest common divisor of given numbers.';
export const generateQuestion = () => {
  const a = isRandomNumber();
  const b = isRandomNumber();
  const question = `${a} ${b}`;
  return [question, a, b];
};
export const questionAndAnswer = () => {
  const [question, a, b] = generateQuestion();
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
  const currAnswer = gcd();
  const currentAnswer = currAnswer.toString();
  return [question, currentAnswer];
};
export const greatestCommonDivisor = () => {
  playGame(questionGame, questionAndAnswer);
};
