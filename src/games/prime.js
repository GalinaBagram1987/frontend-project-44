import getRandomNumber from '../utility.js';
import playGame from '../index.js';

export const questionGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 1) return false;
  for (let j = 2; j < num; j += 1) {
    if (num % j === 0) {
      return false;
    }
  }
  return true;
};

export const questionAndAnswer = () => {
  const question = getRandomNumber(1, 50);
  const checkPrime = isPrime(question);
  const currentAnswer = checkPrime ? 'yes' : 'no';
  return [question, currentAnswer];
};
export const findPrime = () => {
  playGame(questionGame, questionAndAnswer);
};
