import isRandomNumber from '../utility.js';
import playGame from '../index.js';

export const questionGame = 'Answer "yes" if the number is even, otherwise answer "no".';
// выносим функцию определения четности отдельно
const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};
export const questionAndAnswer = () => {
  const question = isRandomNumber(1, 50);
  const currentAnswer = isEven(question) ? 'yes' : 'no';
  return [question, currentAnswer];
};

export const isEvenGame = () => {
  playGame(questionGame, questionAndAnswer);
};
