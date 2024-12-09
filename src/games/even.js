import isRandomNumber from '../utility.js';
import playGame from '../index.js';

export const questionGame = 'Answer "yes" if the number is even, otherwise answer "no".';
export const generateQuestion = () => {
  const result = isRandomNumber();
  return result;
};

export const questionAndAnswer = () => {
  const question = generateQuestion();
  const currentAnswer = question % 2 === 0 ? 'yes' : 'no';
  return [question, currentAnswer];
};

export const isEven = () => {
  playGame(questionGame, questionAndAnswer);
};
