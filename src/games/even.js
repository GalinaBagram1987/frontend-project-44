import getRandomNumber from '../utility.js';
import playGame from '../index.js';

export const questionGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};
export const questionAndAnswer = () => {
  const question = getRandomNumber(1, 50);
  const currentAnswer = isEven(question) ? 'yes' : 'no';
  return [question, currentAnswer];
};

export const isEvenGame = () => {
  playGame(questionGame, questionAndAnswer);
};
